import React from 'react'

function Reviews({ rev }) {
  // when you click on a review, takes you to the ReviewsPage where you can like or dislike
  return (
    <div>
      <p>{rev}</p>
    </div>
  )
}

export default Reviews