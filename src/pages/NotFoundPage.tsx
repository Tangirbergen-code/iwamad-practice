import { Link } from 'react-router'

export const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h2 style={{ fontSize: '2rem', color: '#ef4444' }}>404 - Page Not Found</h2>
      <p style={{ margin: '16px 0' }}>The page you are looking for does not exist.</p>
      <Link to="/" style={{ color: '#2563eb', fontWeight: 'bold' }}>
        Go back to Home
      </Link>
    </div>
  )
}