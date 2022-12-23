import React, { useState } from 'react'
import MangasContainer from './MangasContainer'
import ReviewsPage from './ReviewsPage'
import { Container } from "@material-ui/core"

function MangaPage({ mangas, currUse, logged, add }) {
  const [mangaChoice, setMangaChoice] = useState({})
  const [viewOne, setViewOne] = useState(false)
  let mangasHere = mangaChoice  
  console.log( mangaChoice)
  function useSetMangaChoice(num){
    let x = mangas.find(m => m.id === num)
    setMangaChoice(x)
    setViewOne(!viewOne)
  }
  console.log(mangas)

  function resetMangaPage(){
    setMangaChoice({})
    setViewOne(false)
  }



  return (
    <>
    <Container className='manga-page' >
      {viewOne ? <div>
        <ReviewsPage manga={mangasHere} reset={resetMangaPage} currUse={currUse} add={add} mangas={mangas} setVo={setViewOne}/>
      </div> : <div>
        <MangasContainer mangas={mangas} choice={useSetMangaChoice} currUse={currUse} logged={logged} />
      </div> }
    </Container>
      
    </>
  )
}

export default MangaPage