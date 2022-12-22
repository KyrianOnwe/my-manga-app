import React, {useState} from 'react'

function AddReview({ useHandM, usErr, id, currUseId }) {
  const [newReviewReview, setNewReviewReview] = useState('')
  // const [newReview, setNewReview] = useState({
  //   user_id: {currUseId}, 
  //   manga_id: {id}, 
  //   review: {newReviewReview}
  // })

  function useSetNewReviewReview(e){
    setNewReviewReview(e.target.value)
  }
  function handleNewReview(e){
    e.preventDefault()
    const newReview = {user_id: `${currUseId}`, manga_id: `${id}`, review: `${newReviewReview}`}
    fetch('/reviews', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newReview)
    })
      .then((r) => {
        if(r.ok){
          r.json().then(useHandM)
        } else {
          r.json().then(usErr)
        }
      })
  }
  // {manga id, user id(if any), the review}

  return (
    <div>
      <form onSubmit={handleNewReview}>
        <input type='text' placeholder='what do you think?' name='new review' onChange={useSetNewReviewReview} />
      </form>
    </div>
  )
}

export default AddReview