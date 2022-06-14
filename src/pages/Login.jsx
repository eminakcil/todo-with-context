import { useNavigate } from 'react-router-dom'
import { getPath } from '../utils'

export default function Login() {
  const navigate = useNavigate()

  function submitHandle(e) {
    e.preventDefault()

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
                />
              </div>
              <div className="mb-6">
                <label className="form-label">Şifre</label>
                <input
                  type="password"
                  className="form-input"
                  placeholder="Şifre"
                />
              </div>
              <button
                type="submit"
                className="form-button"
              >
                Giriş Yap
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
