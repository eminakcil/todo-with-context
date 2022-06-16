import { useAuth } from '../context'
import { trash, check, x } from '../icons'

export default function TodoItem({ todo }) {
  const { user } = useAuth()

  return (
    <div className="flex flex-row flex-wrap gap-3 justify-between items-center wrapper">
      {/* <pre>{JSON.stringify(todo, null, 2)}</pre> */}
      <div className="flex-1">{todo.title}</div>
      {user.id === todo.userId && (
        <>
          {todo.complated ? (
            <button className="form-button btn-outline-danger w-auto">{x}</button>
          ) : (
            <button className="form-button btn-outline-success w-auto">{check}</button>
          )}
          <button className="form-button btn-outline-danger w-auto">{trash}</button>
        </>
      )}
    </div>
  )
}
