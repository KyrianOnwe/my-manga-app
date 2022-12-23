import React, { useState } from 'react'
// import Search from './Search'
import MangasContainer from './MangasContainer'
import ReviewsPage from './ReviewsPage'
import { Container } from "@material-ui/core"

function MangaPage({ mangas, currUse, logged, add }) {
  const [mangaChoice, setMangaChoice] = useState({})
  const [viewOne, setViewOne] = useState(false)
  // const [change, setchange] = useState([])
  // const [reviewPageInfo, setReviewPageInfo] = useState({})
  let mangasHere = mangaChoice  
  console.log( mangaChoice)
  function useSetMangaChoice(num){
    let x = mangas.find(m => m.id === num)
    // console.log(num.id)
    setMangaChoice(x)
    setViewOne(!viewOne)
  }
  console.log(mangas)

  // function useHandleMake(data){

  // }


  // useEffect(() => {
  //   if(mangaChoice.x[0].id){
  //     // console.log(mangaChoice)
  //      setchange([...change, mangaChoice])
  //   }

  
  // }, [mangaChoice, change])

  function resetMangaPage(){
    setMangaChoice({})
    setViewOne(false)
  }

  function search(input){
    mangas.filter(m => m.title === input)
  }

  function mangaAdd(data){
    add(data)

  }

  return (
    <>
    <Container className='manga-page' >
      {viewOne ? <div>
        <ReviewsPage manga={mangasHere} reset={resetMangaPage} currUse={currUse} add={add} mangas={mangas} setVo={setViewOne}/>
      </div> : <div>
        {/* <Search search={search}/> */}
        <MangasContainer mangas={mangas} choice={useSetMangaChoice} currUse={currUse} logged={logged} />
      </div> }
    </Container>
      
    </>
  )
}

export default MangaPage