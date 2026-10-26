import Link from "next/link";
import { Utensils } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <Link href="/" className="logo">
          <span className="logo-mark"><Utensils size={21} /></span>
          DineDesk
        </Link>
        <div className="nav-links">
          <Link href="/menu">Menu</Link>
          <Link href="/reservation">Reservations</Link>
          <Link href="/track">Track Order</Link>
          <Link href="/kitchen">Kitchen</Link>
        </div>
        <Link href="/cart" className="btn btn-primary">View Cart</Link>
      </div>
    </nav>
  );
}
