import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import classNames from 'classnames'
import { useTodo, useAuth } from '../context'

export default function FilterButtons() {
  const [searchParams, setSearchParams] = useSearchParams()

  const { onlyMe, updateOnlyMe, completed, updateCompleted } = useTodo()
  const { user } = useAuth()

  useEffect(() => {
    if (searchParams.get('only-me') === 'true') updateOnlyMe(true)
    if (searchParams.get('completed')?.length > 0) updateCompleted(searchParams.get('completed'))
  }, [])

  useEffect(() => {
    if (onlyMe) {
      searchParams.set('only-me', onlyMe)
    } else {
      searchParams.delete('only-me')
    }
    setSearchParams(searchParams)
  }, [onlyMe])

  useEffect(() => {
    if (completed === false) {
      searchParams.delete('completed')
    } else {
      searchParams.set('completed', completed)
    }
    setSearchParams(searchParams)
  }, [completed])

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
