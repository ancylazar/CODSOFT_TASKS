import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "DineDesk | Restaurant Ordering Platform",
  description: "Modern restaurant ordering, reservations and kitchen management platform."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <footer className="footer">
          <div className="container footer-inner">
            <div>
              <strong>DineDesk</strong>
              <p>Digital dining, made simple.</p>
            </div>
            <span>© 2026 DineDesk Restaurant Platform</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
