import React from 'react'
import Search from './Search'
import MangasContainer from './MangasContainer'

function MangaPage({ mangas }) {
  return (
    <div>
      <Search />
      <MangasContainer mangas={mangas} />
    </div>
  )
}

export default MangaPage