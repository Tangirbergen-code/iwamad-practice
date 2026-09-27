export type Skill = {
  id: number
  label: string
}

type SkillBadgeProps = {
  skill: Skill
}

export const SkillBadge = ({ skill }: SkillBadgeProps) => {
  return (
    <span
      style={{
        display: 'inline-block',
        backgroundColor: '#e2e8f0',
        color: '#334155',
        padding: '6px 12px',
        borderRadius: '16px',
        fontSize: '0.875rem',
        fontWeight: '500',
        margin: '4px',
      }}
    >
      {skill.label}
    </span>
  )
}