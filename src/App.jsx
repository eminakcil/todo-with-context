import { useRoutes } from 'react-router-dom'
import Provider from './context'

import routes from './routes'

export default function App() {
  return <Provider>{useRoutes(routes)}</Provider>
}
