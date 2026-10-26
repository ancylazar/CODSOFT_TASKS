import Link from "next/link";

const interior = "https://images.unsplash.com/photo-1772456596722-44fc0b48571a?auto=format&fit=crop&fm=jpg&q=85&w=1600";
const pizza = "https://images.unsplash.com/photo-1743615357618-de4ac111c79c?auto=format&fit=crop&fm=jpg&q=85&w=1200";
const biryani = "https://images.unsplash.com/photo-1752673508949-f4aeeaef75f0?auto=format&fit=crop&fm=jpg&q=85&w=1200";
const burger = "https://images.unsplash.com/photo-1599155253646-7989e08c05c1?auto=format&fit=crop&fm=jpg&q=85&w=1200";

export default function Home() {
  return <>
    <main>
      <section className="hero realistic-hero"><div className="hero-overlay"/><div className="container hero-grid realistic-grid">
        <div className="hero-copy"><span className="eyebrow light">Welcome to DineDesk</span><h1>A little more<br/><span>flavor in your day.</span></h1>
          <p>Discover crave-worthy food, reserve a table, order online and follow every bite from kitchen to doorstep.</p>
          <div className="hero-actions"><Link className="btn btn-primary" href="/menu">Explore Our Menu →</Link><Link className="btn btn-glass" href="/reservation">Book a Table</Link></div>
          <div className="hero-proof"><span>● Open today</span><span>4.9 ★ guest rating</span><span>25 min average</span></div>
        </div>
        <div className="hero-floating"><div className="floating-photo"><img src="https://images.unsplash.com/photo-1743615357618-de4ac111c79c?auto=format&fit=crop&fm=jpg&q=85&w=1200" alt="Fresh pizza"/></div><div className="floating-info"><span>Chef's pick</span><strong>Fire-Roasted Pizza</strong><small>Fresh from the oven · ₹349</small></div></div>
      </div></section>

      <section className="section"><div className="container"><div className="section-head"><div><span className="eyebrow">What's cooking</span><h2>People are loving these</h2><p className="muted">A few guest favorites from our colorful kitchen.</p></div><Link className="btn btn-secondary" href="/menu">See full menu</Link></div>
        <div className="feature-food-grid">
          <Link href="/menu" className="feature-food"><img src="https://images.unsplash.com/photo-1743615357618-de4ac111c79c?auto=format&fit=crop&fm=jpg&q=85&w=1200" alt="Pizza"/><div><span>Wood-fired favorite</span><h3>Fire-Roasted Pizza</h3><strong>₹349</strong></div></Link>
          <Link href="/menu" className="feature-food"><img src="https://images.unsplash.com/photo-1752673508949-f4aeeaef75f0?auto=format&fit=crop&fm=jpg&q=85&w=1200" alt="Biryani"/><div><span>Indian classic</span><h3>Royal Chicken Biryani</h3><strong>₹329</strong></div></Link>
          <Link href="/menu" className="feature-food"><img src="https://images.unsplash.com/photo-1599155253646-7989e08c05c1?auto=format&fit=crop&fm=jpg&q=85&w=1200" alt="Burger"/><div><span>House signature</span><h3>Double Burger</h3><strong>₹289</strong></div></Link>
        </div>
      </div></section>

      <section className="section story-section"><div className="container story-grid"><img src="https://images.unsplash.com/photo-1772456596722-44fc0b48571a?auto=format&fit=crop&fm=jpg&q=85&w=1600" alt="Colorful DineDesk restaurant interior" className="story-image"/>
        <div><span className="eyebrow">The DineDesk experience</span><h2>From your first click to the last bite.</h2><p className="muted">DineDesk brings the restaurant experience online without making it feel robotic. Browse a visual menu, reserve your favorite table, pay securely and watch your order move through the kitchen.</p>
          <div className="mini-features"><div><b>01</b><span>Visual menu</span></div><div><b>02</b><span>Easy ordering</span></div><div><b>03</b><span>Live tracking</span></div></div>
          <Link className="btn btn-primary" href="/track">Track an Order</Link>
        </div>
      </div></section>

      <section className="section cta-section"><div className="container cta"><div><span className="eyebrow light">Tonight's plan?</span><h2>Good food deserves a good table.</h2><p>Reserve a table in under a minute.</p></div><Link className="btn btn-white" href="/reservation">Reserve Now →</Link></div></section>
    </main>
  </>;
}
