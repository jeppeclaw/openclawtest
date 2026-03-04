import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Random() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h1>Random</h1>
        <p>This is a random route.</p>
      </main>
      <Footer />
    </>
  )
}
