import { useEffect, useState } from 'react'
import { supabase } from '../client'
import { useNavigate, useParams } from 'react-router-dom'

const ViewCreator = ({ deleteCreator }) => {
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
      <div style={{ display: 'flex', columnGap: 40, marginBottom: 40 }}>
        <img src={creator.imageURL} alt={`${creator.name}'s image`} width="500" height="500" />
        <div>
          <h1 className='pico-color-azure-400' style={{ textTransform: 'uppercase' }}>
            {creator.name}
          </h1>
          <p>{creator.description}</p>
          <p>{creator.url}</p>
        </div>
      </div>

      <button onClick={() => navigate(`../edit/${creator.id}`)}>
        Edit
      </button>
      <button className='pico-background-red-450' style={{ marginTop: 20 }} onClick={handleDeleteClick}>
        Delete
      </button>
    </div>
  )
}

export default ViewCreator