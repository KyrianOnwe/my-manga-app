import React from 'react'
// import { Link } from 'react-router-dom'
import Reviews from './Reviews'


function NewMangaCards({ manga, choice, currUse, logged }) {
  // when a card is clicked, should show the review page for that title along with pic of title, add review, like or dislike

  // const currentUser = useRef(currUse)
  function setChoice(){
    choice(manga.id)
  }

  function noUser(){
    alert('Only signed in users can interact with reviews!')
    
  }
  console.log(manga)

  let reviews = [...manga.reviews]
  
  return (
    <div onClick={!logged ? noUser : setChoice} className='card'>
      <h4>{manga.title}</h4>
      {reviews.length >= 1 ? reviews.map(r => <Reviews key={r.review + r.id} rev={r} />) : null}
      
    </div>
  )
}

export default NewMangaCards