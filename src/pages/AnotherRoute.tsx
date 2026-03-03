import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AnotherRoute() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h1>Another Route</h1>
        <p>This is a placeholder page.</p>
      </main>
      <Footer />
    </>
  )
}
