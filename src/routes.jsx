import { Suspense, lazy } from 'react'

import Todos from './pages/Todos'
import Login from './pages/Login'
const Page404 = lazy(() => import('./pages/Page404'))

const routes = [
  {
    path: '/',
    name: 'index',
    element: <Todos />,
  },
  {
    path: '/login',
    name: 'login',
    element: <Login />,
  },
  {
    path: '*',
    element: (
      <Suspense>
        <Page404 />
      </Suspense>
    ),
  },
]

export default routes
