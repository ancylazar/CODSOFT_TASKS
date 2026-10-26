"use client";
import { useState } from "react";

export default function ReservationPage(){
  const [form,setForm]=useState({name:"",email:"",date:"",time:"19:30",guests:"2"});
  const [done,setDone]=useState(false);
  async function submit(e:React.FormEvent){e.preventDefault(); const r=await fetch("/api/reservations",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(form)}); if(r.ok)setDone(true); else alert("Could not reserve table");}
  return <main className="section"><div className="container"><div className="form-card">
    <span className="eyebrow">Book your table</span><h2>Reserve a Table</h2><p className="muted">Skip the queue and reserve your preferred time.</p>
    <form onSubmit={submit}><div className="form-grid">
      <div className="field"><label>Name</label><input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></div>
      <div className="field"><label>Email</label><input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></div>
      <div className="field"><label>Date</label><input required type="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})}/></div>
      <div className="field"><label>Time</label><select value={form.time} onChange={e=>setForm({...form,time:e.target.value})}><option>12:30</option><option>13:30</option><option>18:30</option><option>19:30</option><option>20:30</option><option>21:30</option></select></div>
      <div className="field full"><label>Guests</label><select value={form.guests} onChange={e=>setForm({...form,guests:e.target.value})}>{[1,2,3,4,5,6,7,8].map(n=><option key={n}>{n}</option>)}</select></div>
    </div><button className="btn btn-primary" style={{width:"100%",marginTop:18}}>Confirm Reservation</button></form>
    {done&&<div className="success">✓ Table reserved successfully! We look forward to serving you.</div>}
  </div></div></main>
}
