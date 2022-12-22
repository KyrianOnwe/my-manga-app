import React from 'react'
import MangaCards from './MangaCards'

function MangasContainer({ mangas, choice, currUse }) {
  return (
    <div>
      {mangas.map(m => <MangaCards key={m.title + m.reviews+m.id} title={m.title} id={m.id} reviews={m.reviews} choice={choice} currUse={currUse} />)}

    </div>
  )
}

export default MangasContainer