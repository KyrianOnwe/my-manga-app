import React from 'react'
import NewMangaCards from './NewMangaCards'

function MangasContainer({ mangas, choice, currUse, logged }) {
  // let mangas2 = [...mangas]
  console.log(mangas[0])
  return (
    <>
    <div className='manga-card' id='card-holder'>
    {mangas.map(m => (<NewMangaCards key={m.title + m.id} manga={m} choice={choice} currUse={currUse} logged={logged} />))}

    </div>
    </>
  )
}

export default MangasContainer