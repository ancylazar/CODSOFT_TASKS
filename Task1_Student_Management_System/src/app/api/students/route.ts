import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(){return NextResponse.json(await prisma.student.findMany({orderBy:{id:"desc"}}));}
export async function POST(req:Request){
 const body=await req.json();
 const student=await prisma.student.create({data:{name:body.name,email:body.email,course:body.course,year:Number(body.year),phone:body.phone||null}});
 return NextResponse.json(student,{status:201});
}