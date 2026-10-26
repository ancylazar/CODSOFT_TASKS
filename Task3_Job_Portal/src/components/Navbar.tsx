import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link href="/" className="brand"><span className="brandMark">H</span>HireFlow</Link>
      <div className="navLinks">
        <Link href="/jobs">Find Jobs</Link>
        <Link href="/companies">Companies</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
      <div className="navActions">
        <Link href="/login" className="login">Sign in</Link>
        <Link href="/post-job" className="navButton">Post a Job</Link>
      </div>
    </nav>
  );
}
