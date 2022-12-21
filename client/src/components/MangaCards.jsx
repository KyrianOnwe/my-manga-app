import React from 'react'
import Reviews from './Reviews'

function MangaCards({ title, reviews }) {
  return (
    <div>
      <h4>{title}</h4>
      {reviews.map(r => <Reviews key={r.review} rev={r.review} />)}
    </div>
  )
}

export default MangaCards