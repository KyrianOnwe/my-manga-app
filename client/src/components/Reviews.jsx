import React from 'react'
import { Typography } from '@material-ui/core'


function Reviews({ rev }) {
  // when you click on a review, takes you to the ReviewsPage where you can like or dislike
  return (
    <div>
      <Typography variant='p'>{rev}</Typography>
    </div>
  )
}

export default Reviews