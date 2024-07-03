import { useEffect, useState } from 'react'
import { supabase } from '../client'
import { useNavigate, useParams } from 'react-router-dom'

const EditCreator = ({ updateCreator, deleteCreator }) => {
  const [creator, setCreator] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCreator = async () => {
      const { data } = await supabase
        .from('creators')
        .select()
        .limit(1)
        .single() 
        .eq('id', id)
      setCreator(data)
    }
    fetchCreator()
  }, [id])

  const handleSubmit = async e => {
    e.preventDefault()
    const { data } = await supabase
      .from('creators')
      .update({ ...creator })
      .eq('id', id)
      .select()
    console.log(data)
    updateCreator(data[0])
    navigate('/')
  }

  const handleDeleteClick = async () => {
    await supabase
      .from('creators')
      .delete()
      .eq('id', id)
    deleteCreator(creator)
    navigate('/')
  }

  if (!creator) return null

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            value={creator.name}
            onChange={e => setCreator({ ...creator, name: e.target.value })} />
        </div>

        <div>
          <label htmlFor='imageURL'>Image</label>
          <input
            type='text'
            name='imageURL'
            id='imageURL'
            value={creator.imageURL}
            onChange={e => setCreator({ ...creator, imageURL: e.target.value })} />
        </div>

        <div>
          <label htmlFor='description'>Description</label>
          <textarea
            name='description'
            id='description'
            value={creator.description}
            onChange={e => setCreator({ ...creator, description: e.target.value })}></textarea>
        </div>

        <div>
          <label htmlFor='url'>URL</label>
          <input
            type='text'
            name='url'
            id='url'
            value={creator.url}
            onChange={e => setCreator({ ...creator, url: e.target.value })} />
        </div>
        <button type='submit'>Sumbit</button>
        <button className='pico-background-red-450' type='button' onClick={handleDeleteClick}>
          Delete
        </button>
      </form>
    </div>
  )
}

export default EditCreator