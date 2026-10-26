import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const orders = await prisma.order.findMany({
    include: { customer: true, items: { include: { menuItem: true } } },
    orderBy: { createdAt: "desc" }
  });
  return NextResponse.json(orders);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!body.items?.length) return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    const customer = await prisma.customer.upsert({
      where: { email: body.email },
      update: { name: body.name, phone: body.phone },
      create: { name: body.name, email: body.email, phone: body.phone }
    });
    const base = body.items.reduce((s:number,x:any)=>s + Number(x.price)*Number(x.quantity),0);
    const total = base + (body.deliveryType === "DELIVERY" && base < 499 ? 40 : 0);
    const order = await prisma.order.create({
      data: {
        customerId: customer.id, total,
        deliveryType: body.deliveryType || "DELIVERY",
        address: body.address || null,
        paymentStatus: "PAID",
        status: "CONFIRMED",
        items: { create: body.items.map((x:any)=>({menuItemId:Number(x.id),quantity:Number(x.quantity),price:Number(x.price)})) }
      }
    });
    return NextResponse.json({ id: order.id });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Unable to create order. Check database configuration." }, { status: 500 });
  }
}
