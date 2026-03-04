import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', borderBottom: '1px solid #eee' }}>
      <Link to="/" style={{ fontWeight: 'bold', fontSize: '1.25rem', textDecoration: 'none', color: 'inherit' }}>
        openclawtest
      </Link>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <a href="#features">Features</a>
        <a href="#cta">Get Started</a>
        <Link to="/another">Another route</Link>
        <Link to="/random">Random</Link>
      </div>
    </nav>
  )
}
