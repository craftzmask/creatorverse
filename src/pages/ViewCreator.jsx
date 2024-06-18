import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { supabase } from '../client'

export default function ViewCreator() {
  let { id } = useParams()
  const [creator, setCreator] = useState(null)
  const navigate = useNavigate()

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

  if (!creator) return null

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 50 }}>
      <div style={{ width: 1000, height: 1000 }}>
        <img style={{ objectFit: 'contain' }} src={creator.imageURL} alt={`The ${creator.name}'s image`} />
      </div>
      <div>
        <h3 style={{ color: '#0472AD' }}>{creator.name}</h3>
        <p>{creator.description}</p>
        <Link to={creator.url} className="contrast">
          <i className="bi bi-link-45deg"></i>
          {" "}
          Creator Page
        </Link>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 40, marginTop: 40 }}>
          <button style={{ flex: 1 }} onClick={() => navigate(`/edit/creators/${creator.id}`)}>
            EDIT
          </button>
          <button style={{ flex: 1, background: 'red' }} onClick={deleteCreator}>
            DELETE
          </button>
        </div>
      </div>
    </div>
  )
}