import AddTodo from '../components/AddTodo'
import Header from '../components/Header'
import Search from '../components/Search'
import TodoList from '../components/TodoList'

export default function Todos() {
  return (
    <>
      <div className="w-full max-w-3xl px-3 flex flex-col gap-6">
        <Header />
        <AddTodo />
        <Search />
        <TodoList />
      </div>
    </>
  )
}
