import { useAuth } from '../context'

import HeaderButton from './HeaderButton'

export default function SignOutButton() {
  const auth = useAuth()

  function clickHandle() {
    auth.logout()
  }

  return <HeaderButton onClick={clickHandle}>Çıkış Yap</HeaderButton>
}
