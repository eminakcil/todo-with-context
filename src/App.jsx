import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import Provider from './context'

export default function App() {
  return (
    <Provider>
      <div className="w-full max-w-3xl px-3 py-3">
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  )
}
