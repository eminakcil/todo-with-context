import { createContext, useContext, useReducer } from 'react'

const TodoContext = createContext()

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [...state.todos, action.payload],
      }
    default:
      throw new Error()
  }
}

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    todos: [],
  })

  const data = {
    todos: state.todos,
    addTodo(todo) {
      dispatch({ type: 'ADD_TODO', payload: todo })
    },
  }

  return <TodoContext.Provider value={data}>{children}</TodoContext.Provider>
}

export const useTodo = () => useContext(TodoContext)
export default TodoProvider
