import SignOutButton from './SignOutButton'
import { useAuth } from '../context'
import SignInButton from './SignInButton'
import HeaderButton from './HeaderButton'

export default function Header() {
  const auth = useAuth()

  return (
    <div className="flex flex-row-reverse gap-3 mb-6">
      {Object.keys(auth.user).length === 0 ? (
        <SignInButton />
      ) : (
        <>
          <SignOutButton />
          <HeaderButton className="hover:bg-transparent">{auth.user.username}</HeaderButton>
        </>
      )}
    </div>
  )
}
