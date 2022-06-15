import AddTodo from '../components/AddTodo'
import Header from '../components/Header'
import TodoList from '../components/TodoList'

export default function Todos() {
  return (
    <>
      <div className="w-full max-w-3xl px-3">
        <Header />
        <AddTodo />
        <TodoList />
      </div>
    </>
  )
}