"use client";
import { useEffect, useState } from "react";

const nextStatus:Record<string,string>={PENDING:"CONFIRMED",CONFIRMED:"PREPARING",PREPARING:"READY",READY:"OUT_FOR_DELIVERY",OUT_FOR_DELIVERY:"DELIVERED"};

export default function KitchenPage(){
 const [orders,setOrders]=useState<any[]>([]);
 async function load(){const r=await fetch("/api/orders");setOrders(await r.json())}
 useEffect(()=>{load()},[]);
 async function advance(id:number,status:string){await fetch(`/api/orders/${id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status})});load()}
 return <main className="section"><div className="container">
  <div className="section-head"><div><span className="eyebrow">Staff workspace</span><h2>Kitchen Dashboard</h2><p className="muted">Manage incoming orders and move them through the kitchen workflow.</p></div><button className="btn btn-secondary" onClick={load}>↻ Refresh</button></div>
  <div className="stats"><div className="stat">Total Orders<strong>{orders.length}</strong></div><div className="stat">Preparing<strong>{orders.filter(o=>o.status==="PREPARING").length}</strong></div><div className="stat">Ready<strong>{orders.filter(o=>o.status==="READY").length}</strong></div></div>
  <div className="panel" style={{marginTop:20}}>{orders.length===0?<div className="empty">No orders yet.</div>:orders.map(o=><div className="order-card" key={o.id}><div style={{display:"flex",justifyContent:"space-between",gap:15}}><div><strong>Order #{o.id}</strong><div className="muted">{o.customer?.name||"Guest"} · {o.deliveryType}</div></div><span className="badge">{o.status}</span></div><div style={{margin:"12px 0"}}>{o.items.map((x:any)=><div key={x.id}>{x.quantity} × {x.menuItem.name}</div>)}</div>{nextStatus[o.status]&&<button className="btn btn-primary" onClick={()=>advance(o.id,nextStatus[o.status])}>Move to {nextStatus[o.status].replaceAll("_"," ")}</button>}</div>)}</div>
 </div></main>
}
