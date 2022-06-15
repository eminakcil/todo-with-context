import { Navigate, useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
import { getPath } from '../utils'
import { useAuth } from '../context'
import Input from '../components/Input'

export default function Login() {
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

  function continueHandle() {
    navigate(getPath('index'))
  }

  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-full max-w-3xl px-3 py-3">
          <div className="wrapper">
            <Formik
              initialValues={{
                username: '',
                password: '',
              }}
              onSubmit={(values) => {
                try {
                  auth.login(values.username, values.password)
                } catch (_) {
                  alert('Kullanıcı bulunamadı!')
                }
              }}
            >
              {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <Input
                      label="Kullanıcı Adı"
                      name="username"
                    />
                  </div>
                  <div className="mb-6">
                    <Input
                      label="Şifre"
                      name="password"
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
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  )
}
