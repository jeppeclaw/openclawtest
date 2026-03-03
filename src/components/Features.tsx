const features = [
  { title: 'Feature One', description: 'Describe the first key benefit of your product here.' },
  { title: 'Feature Two', description: 'Describe the second key benefit of your product here.' },
  { title: 'Feature Three', description: 'Describe the third key benefit of your product here.' },
]

export default function Features() {
  return (
    <section id="features" style={{ padding: '4rem 2rem', background: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Features</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
        {features.map((f) => (
          <div key={f.title} style={{ background: '#fff', padding: '2rem', borderRadius: '0.75rem', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <h3>{f.title}</h3>
            <p style={{ color: '#555' }}>{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
