"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();
  const [cart,setCart]=useState<any[]>([]);
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [address,setAddress]=useState("");
  const [type,setType]=useState("DELIVERY");
  const [loading,setLoading]=useState(false);

  useEffect(()=>setCart(JSON.parse(localStorage.getItem("dinedesk-cart")||"[]")),[]);
  const total=cart.reduce((s,x)=>s+x.price*x.quantity,0)+(type==="DELIVERY"&&totalBase(cart)<499?40:0);
  function totalBase(c:any[]){return c.reduce((s,x)=>s+x.price*x.quantity,0)}

  async function submit(e:React.FormEvent){
    e.preventDefault(); setLoading(true);
    const res=await fetch("/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name,email,phone,address,deliveryType:type,items:cart})});
    const data=await res.json();
    if(res.ok){localStorage.removeItem("dinedesk-cart"); router.push(`/track?order=${data.id}`)}
    else {alert(data.error||"Could not place order");setLoading(false)}
  }

  return <main className="section"><div className="container"><div className="form-card">
    <span className="eyebrow">Secure checkout</span><h2>Complete Your Order</h2>
    <form onSubmit={submit}><div className="form-grid">
      <div className="field"><label>Full Name</label><input required value={name} onChange={e=>setName(e.target.value)} placeholder="Your name"/></div>
      <div className="field"><label>Email</label><input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@email.com"/></div>
      <div className="field"><label>Phone</label><input required value={phone} onChange={e=>setPhone(e.target.value)} placeholder="9876543210"/></div>
      <div className="field"><label>Order Type</label><select value={type} onChange={e=>setType(e.target.value)}><option value="DELIVERY">Delivery</option><option value="PICKUP">Pickup</option></select></div>
      <div className="field full"><label>Delivery Address</label><input value={address} onChange={e=>setAddress(e.target.value)} required={type==="DELIVERY"} placeholder="House / street / city"/></div>
      <div className="field full"><label>Payment</label><select defaultValue="CARD"><option>CARD</option><option>UPI</option><option>CASH_ON_DELIVERY</option></select></div>
    </div>
    <div className="panel" style={{marginTop:20}}><div style={{display:"flex",justifyContent:"space-between"}}><span>Order Total</span><strong>₹{total}</strong></div></div>
    <button className="btn btn-primary" disabled={loading} style={{width:"100%",marginTop:16}}>{loading?"Placing Order...":"Place Order & Pay"}</button>
    </form>
  </div></div></main>
}
