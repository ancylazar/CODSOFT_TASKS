import { NextResponse } from "next/server";

const applications: { jobId: number; candidate: string; email: string; status: string }[] = [];

export async function GET() {
  return NextResponse.json(applications);
}

export async function POST(req: Request) {
  const body = await req.json();
  if (!body.jobId || !body.email) {
    return NextResponse.json({ error: "jobId and email are required" }, { status: 400 });
  }
  const application = { jobId: Number(body.jobId), candidate: body.name || "Candidate", email: body.email, status: "APPLIED" };
  applications.push(application);
  return NextResponse.json(application, { status: 201 });
}
