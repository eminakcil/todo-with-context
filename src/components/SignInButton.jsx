import HeaderButton from './HeaderButton'
import { useNavigate } from 'react-router-dom'
import { getPath } from '../utils'

export default function SignInButton() {
  const navigate = useNavigate()
  function clickHandle() {
    navigate(getPath('login'))
  }

  return <HeaderButton onClick={clickHandle}>Giriş Yap</HeaderButton>
}
