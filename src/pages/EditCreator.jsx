import { useState, useEffect } from 'react'
import { supabase } from '../client'
import { useParams, useNavigate } from 'react-router-dom'


export default function EditCreator() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [creator, setCreator] = useState(null)

  useEffect(() => {
    fetchCreator(id)
  }, [id])

  async function fetchCreator(id) {
    const { data } = await supabase
      .from('creators')
      .select()
      .eq('id', id)
      .limit(1)
      .single()
    setCreator(data)
  }

  async function deleteCreator() {
    await supabase.from('creators').delete().eq('id', id)
    navigate('/')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    console.log(creator)
    await supabase
      .from('creators')
      .update(creator)
      .eq('id', creator.id)
    navigate('/')
  }

  const handleChange = (event) => {
    const { target } = event;
    setCreator((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  }

  if (!creator) return null

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
      <button type="submit">SAVE</button>
      <button
        style={{ width: '100%', background: 'red' }}
        type="button"
        onClick={deleteCreator} >
        DELETE
      </button>
    </form>
  )
}