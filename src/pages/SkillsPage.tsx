import { SkillBadge } from '../components/SkillBadge'
import type { Skill } from '../components/SkillBadge'

const userSkills: Skill[] = [
  { id: 1, label: 'React' },
  { id: 2, label: 'TypeScript' },
  { id: 3, label: 'HTML/CSS' },
  { id: 4, label: 'Git & GitHub' },
]

export const SkillsPage = () => {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h2 style={{ color: '#111827', marginBottom: '16px' }}>My Skills</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px' }}>
        {userSkills.map((skill) => (
          <SkillBadge key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  )
}