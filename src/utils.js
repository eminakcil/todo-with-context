import { generatePath } from 'react-router-dom'
import routes from './routes'

export const getPath = (name, params = {}) => {
  const route = routes.find((r) => r.name === name)
  return generatePath(route.path, params)
}
