import React, { useState } from 'react'

function Search({ search }) {
  const [title, settitle] = useState('')
  function useSearch(e){
    e.preventDefault()
    search(title)
  }
  return (
    <>
      <form onSubmit={useSearch}>
        <input type='text' placeholder='What do you want to see?' name='title' onChange={settitle} />
        <button type='submit'>Go</button>
      </form>
    </>
  )
}

export default Search