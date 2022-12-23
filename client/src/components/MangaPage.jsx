import React, { useState } from 'react'
import Search from './Search'
import MangasContainer from './MangasContainer'
import ReviewsPage from './ReviewsPage'
import { Container } from "@material-ui/core"

function MangaPage({ mangas, currUse }) {
  const [mangaChoice, setMangaChoice] = useState({})
  // const [change, setchange] = useState([])
  // const [reviewPageInfo, setReviewPageInfo] = useState({})

  function useSetMangaChoice(num){
    let x = mangas.filter(m => m.id === num.id)
    // console.log(num.id)
    setMangaChoice({x})
  }
  console.log(mangas)


  // useEffect(() => {
  //   if(mangaChoice.x[0].id){
  //     // console.log(mangaChoice)
  //      setchange([...change, mangaChoice])
  //   }

  
  // }, [mangaChoice, change])

  function resetMangaPage(){
    setMangaChoice({})
  }

  return (
    <>
    <Container maxWidth="sm" background-color='gray' >
      {mangaChoice.x ? <div>
        <ReviewsPage manga={mangaChoice} reset={resetMangaPage} currUse={currUse} />
      </div> : <div>
        <Search />
        {mangas.map(manga => <MangasContainer key={manga} manga={manga} choice={useSetMangaChoice} currUse={currUse} />)}
      </div> }
    </Container>
      
    </>
  )
}

export default MangaPage