import classNames from 'classnames'
import { useTodo } from '../context'

export default function FilterButtons() {
  const { onlyMe, updateOnlyMe } = useTodo()

  function onlyMeHandle() {
    updateOnlyMe(!onlyMe)
  }

  return (
    <div className="flex flex-row justify-end flex-wrap w-full gap-6">
      <button
        type="button"
        onClick={onlyMeHandle}
        className={classNames({
          'form-button w-auto flex-1 sm:flex-initial': true,
          'btn-outline-gray': !onlyMe,
          'btn-gray': onlyMe,
        })}
      >
        Sadece Benim
      </button>
      <button
        type="button"
        className="form-button btn-outline-danger w-auto flex-1 sm:flex-initial"
      >
        Tamamlanmış
      </button>
      <button
        type="button"
        className="form-button btn-outline-danger w-auto flex-1 sm:flex-initial"
      >
        Tamamlanmamış
      </button>
    </div>
  )
}
