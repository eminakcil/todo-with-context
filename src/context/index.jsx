import TodoProvider, { useTodo } from './TodoContext'
import AuthProvider, { useAuth } from './AuthContext'

export default function Provider({ children }) {
  return (
    <AuthProvider>
      <TodoProvider>{children}</TodoProvider>
    </AuthProvider>
  )
}

export { useTodo, useAuth }
