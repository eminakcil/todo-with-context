import { useTodo } from '../context'

export default function TodoList() {
  const { todos } = useTodo()

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{JSON.stringify(todo)}</li>
      ))}
    </ul>
  )
}
