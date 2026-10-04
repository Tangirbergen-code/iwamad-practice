import { NavLink } from 'react-router'
import { useLikes } from '../context/LikesContext'

type HeaderProps = {
  title: string
  tagline: string
}

export const Header = ({ title, tagline }: HeaderProps) => {
  const { likes } = useLikes()

  const linkStyle = ({ isActive }: { isActive: boolean }) => ({
    margin: '0 10px',
    textDecoration: 'none',
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? '#2563eb' : '#4b5563',
    borderBottom: isActive ? '2px solid #2563eb' : 'none',
    paddingBottom: '4px',
  })

  return (
    <header style={{ textAlign: 'center', marginBottom: '20px' }}>
      <h1 style={{ fontSize: '2rem', margin: '0 0 8px 0', color: '#1a1a1a' }}>{title}</h1>
      <p style={{ fontSize: '1rem', color: '#666', margin: '0 0 16px 0' }}>{tagline}</p>

      <div style={{ marginBottom: '12px' }}>
        <span style={{ backgroundColor: '#fee2e2', color: '#991b1b', padding: '4px 12px', borderRadius: '12px', fontWeight: '600' }}>
          ❤️ Total Likes: {likes}
        </span>
      </div>

      <nav style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
        <NavLink to="/" style={linkStyle}>Home</NavLink>
        <NavLink to="/skills" style={linkStyle}>Skills</NavLink>
        <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
      </nav>
    </header>
  )
}