 "use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Plus, ShoppingCart, Star } from "lucide-react";
import type { MenuItem } from "@/lib/menu";

export default function MenuClient({ items }: { items: MenuItem[] }) {
  const [category, setCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(items.map(i => i.category)))];
  const filtered = useMemo(() => category === "All" ? items : items.filter(i => i.category === category), [category, items]);

  function add(item: MenuItem) {
    const cart = JSON.parse(localStorage.getItem("dinedesk-cart") || "[]");
    const existing = cart.find((x: any) => x.id === item.id);
    if (existing) existing.quantity += 1; else cart.push({ ...item, quantity: 1 });
    localStorage.setItem("dinedesk-cart", JSON.stringify(cart));
    alert(`${item.name} added to cart`);
  }

  return <main className="section menu-page"><div className="container">
    <div className="menu-banner">
      <div><span className="eyebrow light">Real dishes • Real cravings</span><h1>Made to order.<br/>Served with personality.</h1><p>Explore our colorful menu, choose your favorites and let DineDesk handle the rest.</p></div>
      <div className="banner-badge"><span>★</span><strong>4.9</strong><small>Guest rating</small></div>
    </div>
    <div className="section-head" style={{marginTop:42}}><div><span className="eyebrow">Explore</span><h2>Today's Menu</h2></div><Link href="/cart" className="btn btn-primary"><ShoppingCart size={18}/> View Cart</Link></div>
    <div className="filters">{categories.map(c => <button key={c} className={`chip ${category === c ? "active" : ""}`} onClick={() => setCategory(c)}>{c}</button>)}</div>
    <div className="menu-grid photo-menu-grid">
      {filtered.map(item => <article className="menu-card photo-card" key={item.id}>
        <div className="photo-wrap"><img src={item.imageUrl} alt={item.name} loading="lazy"/><span className="photo-category">{item.category}</span><span className="rating"><Star size={13} fill="currentColor"/> 4.8</span></div>
        <div className="menu-body"><div className="menu-meta"><span className="menu-name">{item.name}</span><span className="price">₹{item.price}</span></div><p>{item.description}</p><button className="btn btn-primary" onClick={() => add(item)}><Plus size={17}/> Add to Order</button></div>
      </article>)}
    </div>
  </div></main>;
}
