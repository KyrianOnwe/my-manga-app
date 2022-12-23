import React from 'react'
import NewMangaCards from './NewMangaCards'

function MangasContainer({ manga, choice, currUse }) {
  // let mangas2 = [...mangas]
  console.log(manga.title)
  return (
    <>
    <div>
    {manga.map(m => <NewMangaCards key={m.title + m.id} manga={m} choice={choice} currUse={currUse} />)}

    </div>
    </>
  )
}

export default MangasContainer