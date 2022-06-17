import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useTodo } from '../context'
export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams()

  const { searchQuery, updateSearchQuery } = useTodo()

  useEffect(() => {
    if (searchParams.get('search-query')?.length > 0) {
      updateSearchQuery(searchParams.get('search-query'))
    }
  }, [])

  useEffect(() => {
    searchParams.set('search-query', searchQuery)
    setSearchParams(searchParams)
  }, [searchQuery])

  useEffect(() => {
    if (searchParams.get('search-query')?.length === 0) {
      searchParams.delete('search-query')
      setSearchParams(searchParams)
    }
  }, [searchParams])

  return (
    <div className="wrapper">
      <div>
        <input
          type="text"
          className="form-input"
          placeholder="Ara"
          value={searchQuery}
          onChange={(e) => {
            updateSearchQuery(e.target.value)
          }}
        />
      </div>
    </div>
  )
}
