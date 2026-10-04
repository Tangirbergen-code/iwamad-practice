import { SkillBadge } from './SkillBadge'
import type { Skill } from './SkillBadge'
import { LikeButton } from './LikeButton'

export type ProfileCardProps = {
  name: string
  role: string
  bio: string
  skills: Skill[]
}

export const ProfileCard = ({ name, role, bio, skills }: ProfileCardProps) => {
  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '0 auto',
        padding: '24px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        backgroundColor: '#ffffff',
        border: '1px solid #e5e7eb',
      }}
    >
      <h2 style={{ margin: '0 0 4px 0', fontSize: '1.5rem', color: '#111827' }}>{name}</h2>
      <p style={{ margin: '0 0 12px 0', color: '#2563eb', fontWeight: '500' }}>{role}</p>
      <p style={{ color: '#4b5563', lineHeight: '1.5', marginBottom: '20px' }}>{bio}</p>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '1rem', color: '#374151', marginBottom: '8px' }}>Skills</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
          {skills.map((skill) => (
            <SkillBadge key={skill.id} skill={skill} />
          ))}
        </div>
      </div>

      <LikeButton />
    </div>
  )
}