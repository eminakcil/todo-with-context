import { useNavigate } from 'react-router-dom'
import { getPath } from '../utils'

export default function SignOutButton() {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => {
        navigate(getPath('login'))
      }}
      className="border text-gray-400 border-gray-700 border-t-0 hover:bg-blue-600 hover:border-white hover:text-white px-4 py-2 rounded-b-xl"
    >
      Oturumu Kapat
    </button>
  )
}
