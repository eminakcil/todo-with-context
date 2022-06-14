import TodoProvider, { useTodo } from './TodoContext'

export default function Provider({ children }) {
  return <TodoProvider>{children}</TodoProvider>
}

export { useTodo }
