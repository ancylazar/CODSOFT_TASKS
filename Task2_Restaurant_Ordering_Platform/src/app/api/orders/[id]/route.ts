import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const order = await prisma.order.findUnique({ where: { id: Number(id) }, include: { customer:true, items:{include:{menuItem:true}} }});
  if (!order) return NextResponse.json({error:"Order not found"},{status:404});
  return NextResponse.json(order);
}

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { status } = await req.json();
  const order = await prisma.order.update({ where:{id:Number(id)}, data:{status} });
  return NextResponse.json(order);
}
