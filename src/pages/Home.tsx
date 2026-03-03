import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="cta" style={{ textAlign: 'center', padding: '5rem 2rem' }}>
          <h2>Ready to get started?</h2>
          <p style={{ color: '#555', marginBottom: '1.5rem' }}>Sign up today and start building.</p>
          <button style={{ padding: '0.75rem 2rem', background: '#646cff', color: '#fff', border: 'none', borderRadius: '0.5rem', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }}>
            Sign Up Free
          </button>
        </section>
      </main>
      <Footer />
    </>
  )
}
