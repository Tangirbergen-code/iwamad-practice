import { useLikes } from '../context/LikesContext'

export const LikeButton = () => {
  const { likes, addLike } = useLikes()

  return (
    <button
      onClick={addLike}
      style={{
        width: '100%',
        padding: '10px 16px',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: likes > 0 ? '#ef4444' : '#2563eb',
        color: '#ffffff',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',
      }}
    >
      {likes > 0 ? `❤️ Liked (${likes})` : `🤍 Like (${likes})`}
    </button>
  )
}