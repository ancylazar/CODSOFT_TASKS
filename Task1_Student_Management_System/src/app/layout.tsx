import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EduManage - Student Management System",
  description: "CodSoft Task 1 Student Management System"
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}