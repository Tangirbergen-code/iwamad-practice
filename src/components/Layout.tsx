import { Outlet } from 'react-router'
import { Header } from './Header'
import { Footer } from './Footer'

export const Layout = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header title="My Portfolio" tagline="IWaMAD Course Practice" />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer year={2026} author="Student Name" />
    </div>
  )
}