import { generatePath } from 'react-router-dom'
import routes from './routes'
import users from './data/users.json'

export const getPath = (name, params = {}) => {
  const route = routes.find((r) => r.name === name)
  return generatePath(route.path, params)
}

export const getUser = (userId) => {
  return users.find((user) => user.id === userId)
}
