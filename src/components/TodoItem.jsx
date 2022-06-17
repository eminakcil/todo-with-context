import classNames from 'classnames'
import { useAuth, useTodo } from '../context'
import { trash, check, x } from '../icons'
import { getUser } from '../utils'

export default function TodoItem({ todo }) {
  const { user } = useAuth()
  const { removeTodo, toggleTodo } = useTodo()

  function removeHandle() {
    removeTodo(todo.id)
  }

  function toggleHandle() {
    toggleTodo(todo.id)
  }

  return (
    <div className="flex flex-col wrapper">
      {/* <pre>{JSON.stringify(todo, null, 2)}</pre> */}
      <div className="flex flex-row flex-wrap gap-3 justify-between items-center">
        <div
          className={classNames({
            'flex-1 text-white': true,
            'line-through opacity-50': todo.complated,
          })}
        >
          {todo.title}
        </div>
        {user.id === todo.userId && (
          <>
            {todo.complated ? (
              <button
                onClick={toggleHandle}
                className="form-button btn-outline-danger w-auto"
              >
                {x}
              </button>
            ) : (
              <button
                onClick={toggleHandle}
                className="form-button btn-outline-success w-auto"
              >
                {check}
              </button>
            )}
            <button
              onClick={removeHandle}
              className="form-button btn-outline-danger w-auto"
            >
              {trash}
            </button>
          </>
        )}
      </div>
      {todo.userId !== user.id && (
        <div className="text-sm text-white opacity-30">{getUser(todo.userId).username}</div>
      )}
    </div>
  )
}
