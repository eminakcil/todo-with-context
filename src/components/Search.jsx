import { useState } from 'react'

export default function Search() {
  const [searchText, setSearchText] = useState('')

  return (
    <div className="wrapper">
      <div>
        <input
          type="text"
          className="form-input"
          placeholder="Ara"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
        />
      </div>
    </div>
  )
}
