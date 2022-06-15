import { useAuth } from '../context'

import HeaderButton from './HeaderButton'

export default function SignOutButton() {
  const { logout } = useAuth()

  function clickHandle() {
    logout()
  }

  return <HeaderButton onClick={clickHandle}>Çıkış Yap</HeaderButton>
}
