import { createContext, useContext, useEffect, useReducer } from 'react'
import { nanoid } from 'nanoid'

const TodoContext = createContext()

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [...state.todos, action.payload],
      }
    case 'REMOVE_TODO':
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      }
    case 'TOGGLE_TODO': {
      const todoIndex = state.todos.findIndex((todo) => todo.id === action.payload.id)
      const todos = [...state.todos]
      todos[todoIndex].complated =
        action.payload.status === null ? !todos[todoIndex].complated : action.payload.status

      return {
        todos,
      }
    }
    default:
      throw new Error()
  }
}

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    todos: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [],
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state.todos))
  }, [state.todos])

  const data = {
    todos: state.todos,
    addTodo(todo) {
      if (!('id' in todo)) todo.id = nanoid()

      dispatch({ type: 'ADD_TODO', payload: todo })
    },
    removeTodo(id) {
      dispatch({ type: 'REMOVE_TODO', payload: id })
    },
    toggleTodo(id, status = null) {
      dispatch({ type: 'TOGGLE_TODO', payload: { id, status } })
    },
  }

  return <TodoContext.Provider value={data}>{children}</TodoContext.Provider>
}

export const useTodo = () => useContext(TodoContext)
export default TodoProvider
