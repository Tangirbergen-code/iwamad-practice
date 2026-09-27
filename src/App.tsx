import { Header } from './components/Header'
import { ProfileCard } from './components/ProfileCard'
import { Footer } from './components/Footer'
import { Skill } from './components/SkillBadge'

function App() {
  const userSkills: Skill[] = [
    { id: 1, label: 'React' },
    { id: 2, label: 'TypeScript' },
    { id: 3, label: 'HTML/CSS' },
    { id: 4, label: 'Git & GitHub' },
  ]

  return (
    <div style={{ padding: '40px 20px', fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      <Header title="My Portfolio" tagline="IWaMAD Course Practice" />
      <main>
        <ProfileCard
          name="Student Name"
          role="Web Developer & Student"
          bio="Building web applications using modern frameworks like React and TypeScript."
          skills={userSkills}
        />
      </main>
      <Footer year={2026} author="Student Name" />
    </div>
  )
}

export default App