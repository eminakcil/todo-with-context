import { NavLink } from 'react-router-dom'
import AddTodo from '../components/AddTodo'
import Header from '../components/Header'
import SignOutButton from '../components/SignOutButton'
import TodoList from '../components/TodoList'
import { getPath } from '../utils'

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
