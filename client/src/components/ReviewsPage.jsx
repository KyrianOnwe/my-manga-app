import React, { useState } from 'react'
import AddReview from './AddReview'
import Reviews from './Reviews'
import { useNavigate } from 'react-router-dom'

function ReviewsPage({ manga, reset, currUse, mangas, setVo, add }) {
  const [obj, setObj] = useState(manga)

  console.log(manga)
  const hist = useNavigate()


  console.log(obj)
  let revis = obj.reviews
  console.log(revis)
  function useReset(){
    reset()
    setVo(false)
  }
  function setPageReviews(data){
    let prime = revis
    let holder = [...prime, data]    
    prime = holder
    let sorter = obj
    sorter.reviews = prime
    setObj(sorter)
    hist('/mangas')
  }
  console.log(manga)
  return (
    <>
    <div key={obj.title}>
      <button onClick={useReset}>X</button>
      <p>{obj.title}</p>
      <AddReview id={obj.id} currUse={currUse } add={setPageReviews} manga={manga} mangas={mangas}/>
      {revis.map(rv => <Reviews key={rv.id} rev={rv} />)}
      
    </div>
    </>
  )
}

export default ReviewsPage