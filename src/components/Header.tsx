type HeaderProps = {
  title: string
  tagline: string
}

export const Header = ({ title, tagline }: HeaderProps) => {
  return (
    <header style={{ textAlign: 'center', marginBottom: '20px' }}>
      <h1 style={{ fontSize: '2rem', margin: '0 0 8px 0', color: '#1a1a1a' }}>{title}</h1>
      <p style={{ fontSize: '1rem', color: '#666', margin: 0 }}>{tagline}</p>
    </header>
  )
}