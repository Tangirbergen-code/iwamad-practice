import { NavLink } from 'react-router'
import { useLikes } from '../context/LikesContext'
import logo from '../assets/logo.svg' 
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
    
    color: isActive ? 'var(--color-primary)' : 'var(--color-text-muted)',
    borderBottom: isActive ? '2px solid var(--color-primary)' : 'none',
    paddingBottom: '4px',
  })

  return (
    
    <header className="header-layout">
      
      {/* Группируем логотип и текст вместе */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {/* Добавляем логотип с нужными атрибутами */}
        <img src={logo} alt="" width={32} height={32} />
        <div>
          <h1 style={{ fontSize: '1.5rem', margin: '0 0 4px 0', color: 'var(--color-text)' }}>{title}</h1>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', margin: '0' }}>{tagline}</p>
        </div>
      </div>

      <div style={{ marginBottom: '12px' }}>
        <span style={{ 
          backgroundColor: 'var(--color-border)', 
          color: 'var(--color-text)', 
          padding: '4px 12px', 
          borderRadius: '12px', 
          fontWeight: '600' 
        }}>
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