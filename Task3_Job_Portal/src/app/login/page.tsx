"use client";
import Link from "next/link";
export default function Login() {
  return <main className="auth"><div className="authVisual"><div className="brand"><span className="brandMark">H</span>HireFlow</div><div><div className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</div><h1>Good people<br /><span>find good work.</span></h1></div></div><div className="authForm"><div><h2>Welcome back</h2><p>Sign in to continue to your workspace.</p><label>Email<input placeholder="you@example.com" /></label><label>Password<input type="password" placeholder="••••••••" /></label><button onClick={() => location.href="/dashboard"}>Sign in</button><div className="or">or</div><button className="google">Continue with Google</button><small>New to HireFlow? <Link href="/jobs">Explore jobs</Link></small></div></div></main>;
}
