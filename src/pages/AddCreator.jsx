import { useState } from 'react'
import { supabase } from '../client'
import { useNavigate } from 'react-router-dom'

const AddCreator = ({ addCreator }) => {
  const [name, setName] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [description, setDescription] = useState('')
  const [url, setUrl] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    const { data } = await supabase
      .from('creators')
      .insert({ name, imageURL, description, url })
      .select()
      .limit(1)
      .single()
    addCreator(data)
    navigate('/')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={e => setName(e.target.value)} />
        </div>

        <div>
          <label htmlFor='imageURL'>Image</label>
          <input
            type='text'
            name='imageURL'
            id='imageURL'
            value={imageURL}
            onChange={e => setImageURL(e.target.value)} />
        </div>

        <div>
          <label htmlFor='description'>Description</label>
          <textarea
            name='description'
            id='description'
            value={description}
            onChange={e => setDescription(e.target.value)}></textarea>
        </div>

        <div>
          <label htmlFor='url'>URL</label>
          <input
            type='text'
            name='url'
            id='url'
            value={url}
            onChange={e => setUrl(e.target.value)} />
        </div>
        <button type='submit'>Sumbit</button>
      </form>
    </div>
  )
}

export default AddCreator