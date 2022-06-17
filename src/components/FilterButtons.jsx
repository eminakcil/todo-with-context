import classNames from 'classnames'
import { useTodo, useAuth } from '../context'

export default function FilterButtons() {
  const { onlyMe, updateOnlyMe, completed, updateCompleted } = useTodo()
  const { user } = useAuth()

  function onlyMeHandle() {
    updateOnlyMe(!onlyMe)
  }

  function toggleCompleted(value) {
    if (completed === value) {
      value = false
    }
    updateCompleted(value)
  }

  return (
    <div className="flex flex-row justify-end flex-wrap w-full gap-6">
      {Object.keys(user).length !== 0 && (
        <button
          type="button"
          onClick={onlyMeHandle}
          className={classNames({
            'form-button w-auto flex-1 sm:flex-initial': true,
            'btn-outline-gray': !onlyMe,
            'btn-outline-white': onlyMe,
          })}
        >
          Sadece Benim
        </button>
      )}
      <button
        type="button"
        onClick={toggleCompleted.bind(this, 'completed')}
        className={classNames({
          'form-button w-auto flex-1 sm:flex-initial': true,
          'btn-outline-gray': completed !== 'completed',
          'btn-outline-white': completed === 'completed',
        })}
      >
        Tamamlanmış
      </button>
      <button
        type="button"
        onClick={toggleCompleted.bind(this, 'uncompleted')}
        className={classNames({
          'form-button w-auto flex-1 sm:flex-initial': true,
          'btn-outline-gray': completed !== 'uncompleted',
          'btn-outline-white': completed === 'uncompleted',
        })}
      >
        Tamamlanmamış
      </button>
    </div>
  )
}
