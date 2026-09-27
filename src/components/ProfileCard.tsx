import { useState } from 'react'
import { SkillBadge, Skill } from './SkillBadge'

export type ProfileCardProps = {
  name: string
  role: string
  bio: string
  skills: Skill[]
}

export const ProfileCard = ({ name, role, bio, skills }: ProfileCardProps) => {
  const [liked, setLiked] = useState<boolean>(false)
  const [likeCount, setLikeCount] = useState<number>(0)

  const handleLike = () => {
    setLiked(!liked)
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1))
  }

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '0 auto',
        padding: '24px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        backgroundColor: '#ffffff',
        border: liked ? '2px solid #3b82f6' : '1px solid #e5e7eb',
        transition: 'all 0.2s ease',
      }}
    >
      <h2 style={{ margin: '0 0 4px 0', fontSize: '1.5rem', color: '#111827' }}>{name}</h2>
      <p style={{ margin: '0 0 12px 0', color: '#2563eb', fontWeight: '500' }}>{role}</p>
      <p style={{ color: '#4b5563', lineHeight: '1.5', marginBottom: '20px' }}>{bio}</p>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '1rem', color: '#374151', marginBottom: '8px' }}>Skills</h3>
        {skills.length > 0 ? (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
            {skills.map((skill) => (
              <SkillBadge key={skill.id} skill={skill} />
            ))}
          </div>
        ) : (
          <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>No skills added yet.</p>
        )}
      </div>

      <button
        onClick={handleLike}
        style={{
          width: '100%',
          padding: '10px 16px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: liked ? '#ef4444' : '#2563eb',
          color: '#ffffff',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'background-color 0.2s ease',
        }}
      >
        {liked ? `❤️ Liked (${likeCount})` : `🤍 Like (${likeCount})`}
      </button>
    </div>
  )
}