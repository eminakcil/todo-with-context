import { useRef, useState } from 'react'
import { useTodo, useAuth } from '../context'
import FilterButtons from './FilterButtons'

export default function AddTodo() {
  const [todo, setTodo] = useState('')

  const inputRef = useRef()

  const { addTodo } = useTodo()
  const { user } = useAuth()

  /** @param {import('react').FormEvent} e */
  function submitHandle(e) {
    e.preventDefault()

    addTodo({
      title: todo,
      userId: user.id,
      completed: false,
    })

    setTodo('')
    inputRef.current.focus()
  }

  const signedIn = Object.keys(user).length !== 0

  const disabled = !signedIn || todo.length === 0

  function clickHandle() {
    if (!signedIn) {
      alert('Eklemek için önce giriş yap!')
    }
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
        <div className="flex flex-col sm:flex-row gap-6">
          <button
            type="submit"
            className="form-button relative"
            disabled={disabled}
            onClick={clickHandle}
          >
            <>
              Ekle
              {disabled && (
                <div
                  className="absolute top-0 left-0 w-full h-full"
                  onClick={clickHandle}
                ></div>
              )}
            </>
          </button>
          <FilterButtons />
        </div>
      </form>
    </div>
  )
}
