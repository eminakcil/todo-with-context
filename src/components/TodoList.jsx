import { useTodo } from '../context'
import TodoItem from './TodoItem'

export default function TodoList() {
  const { todos } = useTodo()

  return (
    <div className="flex flex-col gap-6 mb-6">
      {todos.map((todo, index) => (
        <TodoItem
          todo={todo}
          key={index}
        />
      ))}
    </div>
  )
}
