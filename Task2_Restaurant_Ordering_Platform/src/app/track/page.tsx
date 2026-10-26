"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const stages=["PENDING","CONFIRMED","PREPARING","READY","OUT_FOR_DELIVERY","DELIVERED"];

function TrackInner(){
 const params=useSearchParams(); const id=params.get("order"); const [order,setOrder]=useState<any>(null);
 useEffect(()=>{if(!id)return; fetch(`/api/orders/${id}`).then(r=>r.json()).then(setOrder)},[id]);
 if(!id)return <main className="section"><div className="container"><div className="empty">No order selected. Place an order first.</div></div></main>;
 if(!order)return <main className="section"><div className="container"><div className="empty">Loading order...</div></div></main>;
 const current=stages.indexOf(order.status);
 return <main className="section"><div className="container"><div className="section-head"><div><span className="eyebrow">Live status</span><h2>Order #{order.id}</h2><p className="muted">Thanks, {order.customer?.name || "customer"}! Your order is being handled by our kitchen.</p></div><span className="badge">{order.status}</span></div>
 <div className="track">{stages.map((s,i)=><div key={s} className={`track-step ${i<=current?"done":""}`}>{i+1}. {s.replaceAll("_"," ")}</div>)}</div>
 <div className="panel"><h3>Items</h3>{order.items.map((x:any)=><div key={x.id} style={{display:"flex",justifyContent:"space-between",padding:"10px 0",borderBottom:"1px solid #eee"}}><span>{x.menuItem.name} × {x.quantity}</span><strong>₹{x.price*x.quantity}</strong></div>)}<div style={{display:"flex",justifyContent:"space-between",marginTop:15,fontSize:19}}><strong>Total</strong><strong>₹{order.total}</strong></div></div>
 </div></main>;
}

export default function TrackPage(){ return <TrackInner/>; }
