import React from 'react'
// import { Typography } from '@material-ui/core'


function Reviews({ rev }) {
  // when you click on a review, takes you to the ReviewsPage where you can like or dislike
  console.log(rev)
  return (
    <div>
      <p>{rev.review}</p>
    </div>
  )
}

export default Reviews