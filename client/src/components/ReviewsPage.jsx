import React from 'react'
import AddReview from './AddReview'
import Reviews from './Reviews'

function ReviewsPage({ manga, reset, currUse }) {
  // all the reviews of a single manga should be visible here and there should be an 'add a review' button, in addition to 'like' or 'dislike' button
  let obj = manga.x[0]
  let revis = obj.reviews
  function useReset(){
    reset()
  }
  function setPageReviews(data){
    revis = [...revis, data]
  }
  return (
    <>
    <div key={obj.title}>
      <button onClick={useReset}>X</button>
      <p>{obj.title}</p>
      <AddReview id={obj.id} currUse={currUse.id ? currUse.id : 0 } handM={setPageReviews} />
      {/* reviews are listed and each can be liked or disliked */}
      {revis.map(rv => <Reviews rev={rv} />)}
      
    </div>
    </>
  )
}

export default ReviewsPage