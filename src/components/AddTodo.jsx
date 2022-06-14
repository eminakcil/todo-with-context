import { useRef, useState } from 'react'
import { useTodo } from '../context'

export default function AddTodo() {
  const [todo, setTodo] = useState('')

  const inputRef = useRef()

  const { addTodo } = useTodo()

  /** @param {import('react').FormEvent} e */
  function submitHandle(e) {
    e.preventDefault()

    addTodo({
      title: todo,
    })

    setTodo('')
    inputRef.current.focus()
  }

  return (
    <div className="wrapper">
      <form onSubmit={submitHandle}>
        <div className="mb-6">
          <label className="form-label">Todo</label>
          <input
            type="text"
            className="form-input"
            placeholder="Todo"
            value={todo}
            ref={inputRef}
            onChange={(e) => {
              setTodo(e.target.value)
            }}
          />
        </div>
        <button
          type="submit"
          className="form-button"
          disabled={todo.length === 0}
        >
          Ekle
        </button>
      </form>
    </div>
  )
}
