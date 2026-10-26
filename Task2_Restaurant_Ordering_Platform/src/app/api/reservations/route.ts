import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const b=await req.json();
    const customer=await prisma.customer.upsert({
      where:{email:b.email},
      update:{name:b.name},
      create:{name:b.name,email:b.email}
    });
    const date=new Date(`${b.date}T${b.time}:00`);
    const reservation=await prisma.reservation.create({
      data:{customerId:customer.id,date,guests:Number(b.guests)}
    });
    return NextResponse.json(reservation);
  } catch {
    return NextResponse.json({error:"Unable to reserve table"},{status:500});
  }
}
