import React, { useState } from 'react'
import AddReview from './AddReview'
import Reviews from './Reviews'
import { useNavigate } from 'react-router-dom'

function ReviewsPage({ manga, reset, currUse, mangas, setVo, add }) {
  const [obj, setObj] = useState(manga)
  // all the reviews of a single manga should be visible here and there should be an 'add a review' button, in addition to 'like' or 'dislike' button
  // let obj = manga.x[0][0]
  console.log(manga)
  const hist = useNavigate()

  // function resetAddReview(data){
  //   let reviewhold = obj.review 
  //   let newRev = [...reviewhold, data]
  //   let newObj = obj
  //   newObj.reviews = newRev
  //   setObj(newObj)

  // }

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
      {/* reviews are listed and each can be liked or disliked */}
      {revis.map(rv => <Reviews key={rv.id} rev={rv} />)}
      
    </div>
    </>
  )
}

export default ReviewsPage