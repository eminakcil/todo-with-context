import SignOutButton from './SignOutButton'
import { useAuth } from '../context'
import SignInButton from './SignInButton'
import HeaderButton from './HeaderButton'

export default function Header() {
  const { user } = useAuth()

  return (
    <div className="flex flex-row-reverse gap-3 mb-6">
      {Object.keys(user).length === 0 ? (
        <SignInButton />
      ) : (
        <>
          <SignOutButton />
          <HeaderButton className="hover:bg-transparent">{user.username}</HeaderButton>
        </>
      )}
    </div>
  )
}
