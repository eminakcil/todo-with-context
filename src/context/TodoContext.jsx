import { createContext, useContext, useEffect, useReducer } from 'react'
import { nanoid } from 'nanoid'
import { useAuth } from './'

const TodoContext = createContext()

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      }
    case 'TOGGLE_TODO': {
      const todoIndex = state.todos.findIndex((todo) => todo.id === action.payload.id)
      const todos = [...state.todos]
      todos[todoIndex].completed =
        action.payload.status === null ? !todos[todoIndex].completed : action.payload.status

      return {
        ...state,
        todos,
      }
    }
    case 'UPDATE_ONLY_ME':
      return {
        ...state,
        onlyMe: action.payload,
      }
    case 'UPDATE_COMPLETED':
      return {
        ...state,
        completed: action.payload,
      }
    default:
      throw new Error()
  }
}

const TodoProvider = ({ children }) => {
  const { user } = useAuth()

  const [state, dispatch] = useReducer(reducer, {
    todos: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [],
    completed: false, // completed, false, uncompleted
    onlyMe: false,
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state.todos))
  }, [state.todos])

  const data = {
    todos: state.todos,
    onlyMe: state.onlyMe,
    completed: state.completed,
    filteredTodos: state.todos.filter((todo) => {
      return (
        (Object.keys(user).length !== 0 && state.onlyMe ? todo.userId === user.id : true) &&
        (state.completed !== false
          ? state.completed === 'completed'
            ? todo.completed
            : !todo.completed
          : true)
      )
    }),
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
    updateOnlyMe(value) {
      dispatch({ type: 'UPDATE_ONLY_ME', payload: value })
    },
    updateCompleted(value) {
      dispatch({ type: 'UPDATE_COMPLETED', payload: value })
    },
  }

  return <TodoContext.Provider value={data}>{children}</TodoContext.Provider>
}

export const useTodo = () => useContext(TodoContext)
export default TodoProvider
