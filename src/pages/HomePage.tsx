import { ProfileCard } from '../components/ProfileCard'
import type { Skill } from '../components/SkillBadge'
const userSkills: Skill[] = [
  { id: 1, label: 'React' },
  { id: 2, label: 'TypeScript' },
  { id: 3, label: 'HTML/CSS' },
  { id: 4, label: 'Git & GitHub' },
]

export const HomePage = () => {
  return (
    <ProfileCard
      name="Student Name"
      role="Web Developer & Student"
      bio="Building web applications using modern frameworks like React and TypeScript."
      skills={userSkills}
    />
  )
}