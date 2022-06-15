import HeaderButton from './HeaderButton'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import { getPath } from '../utils'
import { useState } from 'react'

export default function SignInButton() {
  const navigate = useNavigate()
  function clickHandle() {
    navigate(getPath('login'))
  }

  const [isBouncing] = useState(false)

  /*function bounce() {
    setIsBouncing(true)

    setTimeout(() => {
      setIsBouncing(false)
    }, 500)
  }*/

  return (
    <HeaderButton
      className={classNames({
        'animate-ping': isBouncing,
      })}
      onClick={clickHandle}
    >
      Giriş Yap
    </HeaderButton>
  )
}
