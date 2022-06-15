import { Navigate, useNavigate } from 'react-router-dom'
import { getPath } from '../utils'
import { useAuth } from '../context'
import { useState } from 'react'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const auth = useAuth()
  const navigate = useNavigate()

  if (Object.keys(auth.user).length !== 0) {
    return (
      <Navigate
        to={getPath('index')}
        replace={true}
      />
    )
  }

  function submitHandle(e) {
    e.preventDefault()

    try {
      auth.login(username, password)
    } catch (_) {
      alert('Kullanıcı bulunamadı!')
    }
  }

  function continueHandle() {
    navigate(getPath('index'))
  }

  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-full max-w-3xl px-3 py-3">
          <div className="wrapper">
            <form onSubmit={submitHandle}>
              <div className="mb-6">
                <label className="form-label">Kullanıcı Adı</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Kullanıcı Adı"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value)
                  }}
                />
              </div>
              <div className="mb-6">
                <label className="form-label">Şifre</label>
                <input
                  type="password"
                  className="form-input"
                  placeholder="Şifre"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                />
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
                <button
                  type="submit"
                  className="form-button"
                >
                  Giriş Yap
                </button>
                <button
                  type="button"
                  className="form-button bg-green-500 hover:bg-green-700 focus:ring-green-800"
                  onClick={continueHandle}
                >
                  Devam Et
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
