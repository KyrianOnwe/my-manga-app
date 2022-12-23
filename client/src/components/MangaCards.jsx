import React from 'react'
// import { Link } from 'react-router-dom'
import Reviews from './Reviews'


function MangaCards({ title, reviews, id, choice, currUse }) {
  // when a card is clicked, should show the review page for that title along with pic of title, add review, like or dislike
  function setChoice(){
    currUse.id ? choice(id) : noUser()
  }

  function noUser(){
    alert('Only signed in users can interact with reviews!')
    
  }
  return (
    <div onClick={setChoice}>
      <h4>{title}</h4>
      {reviews.map(r => <Reviews key={r.review} rev={r.review} />)}
    </div>
  )
}

export default MangaCards