import React, { useState } from 'react'

function MangaBuild({ addMng, usErr }) {
    const [formData, setFormData] = useState({
        title:'',
        artist:'', 
        description:'', 
        ongoing:'', 
        genre:'', 
        chapters:'', 
        image:''
    })

    const {title, artist, description, ongoing, genre, chapters, image} = formData

    function onSubmit(e){
        e.preventDefault()
        const manga = {
            title,
            artist, 
            description, 
            ongoing, 
            genre, 
            chapters, 
            image
        }        
       
        fetch(`/mangas`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(manga)
        })
        .then(res => {
          if(res.ok){
            res.json().then(addMng)
          } else {
            res.json().then(usErr)
          }
        })      
       
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })

      }
  return (
    <> 
    <form onSubmit={onSubmit} className='manga-form'>
    <label>
      Title?
      </label>
    <input type='text' name='title' value={title} placeholder='Title' onChange={handleChange} />

    <label>
      Description?
      </label>
    <input type='text' name='description' value={description} placeholder='description' onChange={handleChange} />
   
    <label>
      Is it still going strong (true or false)?
      </label>
    <input type='text' name='ongoing' value={ongoing} placeholder='Is it ongoing' onChange={handleChange} />

    <label>
      Genre?
      </label>
    <input type='text' name='genre' value={genre} placeholder='Genre' onChange={handleChange} />

    <label>
      How many chapters?
      </label>
    <input type='text' name='chapters' value={chapters} placeholder= 'How many chapters?' onChange={handleChange} />

    <label>
      Image url:
      </label>
    <input type='text' name='image' value={image} placeholder='Image url' onChange={handleChange} />

    <label>
      Artist:
      </label>
    <input type='text' name='artist' value={artist} placeholder='Artist name' onChange={handleChange} />

    <input type='submit' value='Add it' />
  </form>
    </>
  )
}

export default MangaBuild