 "use client";
import {useState} from "react";

export default function StudentForm(){
 const [form,setForm]=useState({name:"",email:"",course:"M.Tech Software Engineering",year:"3"});
 const [msg,setMsg]=useState("");
 async function submit(e:React.FormEvent){e.preventDefault();const r=await fetch("/api/students",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...form,year:Number(form.year)})});setMsg(r.ok?"Student added successfully":"Unable to add student");if(r.ok)setForm({name:"",email:"",course:"M.Tech Software Engineering",year:"3"});}
 return <form className="form" onSubmit={submit}><input required placeholder="Student name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/><input required type="email" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/><input required placeholder="Course" value={form.course} onChange={e=>setForm({...form,course:e.target.value})}/><input required type="number" min="1" max="6" placeholder="Year" value={form.year} onChange={e=>setForm({...form,year:e.target.value})}/><button>Add Student</button>{msg&&<small>{msg}</small>}</form>
}