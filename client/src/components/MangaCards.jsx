import React from 'react'
// import { Link } from 'react-router-dom'
import Reviews from './Reviews'


function MangaCards({ manga, choice, currUse }) {
  // when a card is clicked, should show the review page for that title along with pic of title, add review, like or dislike
  function setChoice(){
    currUse.id ? choice(manga.id) : noUser()
  }

  function noUser(){
    alert('Only signed in users can interact with reviews!')
    
  }

  let reviews = manga.reviews
  console.log(manga)
  return (
    <div onClick={setChoice}>
      <h4>{manga.title}</h4>
      {manga.map(r => <Reviews key={r.review} rev={r.review} />)}
    </div>
  )
}

export default MangaCards