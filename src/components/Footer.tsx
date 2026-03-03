export default function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid #eee', color: '#999', fontSize: '0.875rem' }}>
      &copy; {new Date().getFullYear()} openclawtest. All rights reserved.
    </footer>
  )
}
