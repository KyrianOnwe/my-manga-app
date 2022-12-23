import React from 'react'


function Reviews({ rev }) {
  console.log(rev)
  return (
    <div>
      <p>{rev.review}</p>
    </div>
  )
}

export default Reviews