import React, {useState} from 'react'

function AddReview({  usErr, id, currUse, add, mangas  }) {
  console.log(currUse.id)
  let us_id = currUse.id
  console.log(us_id)
  const [review, setReview] = useState('')
  
  function handleNewReview(e){
    e.preventDefault()
    const newReview = {user_id: us_id, manga_id: `${id}`, review: `${review}`}
    fetch('/reviews', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newReview)
    })
      .then((r) => {
        if(r.ok){
          r.json().then(mangaUpdate)
        } else {
          r.json().then(usErr)
        }
      })
  }
  // function handleRevReset(data){
  //   add(data)
  //   setReview('')
    
  // }
  console.log(mangas)
  function mangaUpdate(data){
    add(data)
  }
  // {manga id, user id(if any), the review}

  return (
    <div>
      <form onSubmit={handleNewReview}>
        <input type='text' placeholder='what do you think?' name='review' onChange={(e) => setReview(e.target.value)} />
        <button type='submit'>Go</button>
      </form>
    </div>
  )
}

export default AddReview