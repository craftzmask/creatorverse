import { useState } from 'react'
import { supabase } from '../client'
import { useNavigate } from 'react-router-dom'

export default function AddCreator() {
  const [creator, setCreator] = useState({
    name: '',
    imageURL: '',
    description: '',
    url: ''
  })
  const navigate = useNavigate()

  const handleChange = (event) => {
    const { target } = event;
    setCreator((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault()
    await supabase.from('creators').insert(creator)
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">NAME</label>
          <input
            type="text" name="name" id="name" required
            value={creator.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="imageURL">IMAGE</label>
          <input
            type="text" name="imageURL" id="imageURL"
            value={creator.imageURL} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="description">DESCRIPTION</label>
          <textarea
            type="text" name="description" id="description" required
            value={creator.description} onChange={handleChange}>
          </textarea>
        </div>
        <div>
          <label htmlFor="url">URL</label>
          <input
            type="text" name="url" id="url" required
            value={creator.url} onChange={handleChange} />
        </div>
        <button type="submit">SUBMIT</button>
    </form>
  )
}