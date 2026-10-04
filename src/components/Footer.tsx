type FooterProps = {
  year: number
  author: string
}

export const Footer = ({ year, author }: FooterProps) => {
  return (
    <footer style={{ textAlign: 'center', marginTop: '30px', color: '#9ca3af', fontSize: '0.875rem' }}>
      <p>© {year} {author}. All rights reserved.</p>
    </footer>
  )
}