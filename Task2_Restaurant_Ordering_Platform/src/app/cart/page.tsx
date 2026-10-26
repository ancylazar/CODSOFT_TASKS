"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

type Item = {id:number;name:string;price:number;image:string;quantity:number};

export default function CartPage() {
  const [cart, setCart] = useState<Item[]>([]);
  useEffect(() => setCart(JSON.parse(localStorage.getItem("dinedesk-cart") || "[]")), []);
  const save = (next: Item[]) => { setCart(next); localStorage.setItem("dinedesk-cart", JSON.stringify(next)); };
  const change = (id:number, delta:number) => save(cart.map(x => x.id === id ? {...x,quantity:x.quantity+delta} : x).filter(x => x.quantity > 0));
  const total = cart.reduce((s,x) => s + x.price*x.quantity, 0);

  return <main className="section"><div className="container">
    <div className="section-head"><div><span className="eyebrow">Your selection</span><h2>Shopping Cart</h2></div><Link href="/menu" className="btn btn-secondary">← Continue Shopping</Link></div>
    {cart.length === 0 ? <div className="empty">Your cart is empty.<br/><Link href="/menu" className="btn btn-primary" style={{marginTop:15}}>Browse Menu</Link></div> :
      <div className="dashboard-grid">
        <div className="cart-list">{cart.map(item => <div className="cart-row" key={item.id}><div style={{display:"flex",alignItems:"center",gap:14}}><span style={{fontSize:35}}>{item.image}</span><div><strong>{item.name}</strong><div className="muted">₹{item.price} each</div></div></div><div className="qty"><button onClick={()=>change(item.id,-1)}>−</button><strong>{item.quantity}</strong><button onClick={()=>change(item.id,1)}>+</button></div><strong>₹{item.price*item.quantity}</strong></div>)}</div>
        <div className="panel"><h3>Order Summary</h3><div style={{display:"flex",justifyContent:"space-between",margin:"18px 0"}}><span>Subtotal</span><strong>₹{total}</strong></div><div style={{display:"flex",justifyContent:"space-between",margin:"10px 0"}}><span>Delivery</span><strong>{total >= 499 ? "FREE" : "₹40"}</strong></div><hr/><div style={{display:"flex",justifyContent:"space-between",margin:"18px 0",fontSize:20}}><strong>Total</strong><strong>₹{total + (total >= 499 ? 0 : 40)}</strong></div><Link href="/checkout" className="btn btn-primary" style={{width:"100%"}}>Proceed to Checkout</Link></div>
      </div>}
  </div></main>;
}
