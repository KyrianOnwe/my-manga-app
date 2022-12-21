import React from 'react'
import MangaCards from './MangaCards'

function MangasContainer({ mangas }) {
  return (
    <div>
      {mangas.map(m => <MangaCards key={m.title} title={m.title} reviews={m.reviews} />)}
    </div>
  )
}

export default MangasContainer