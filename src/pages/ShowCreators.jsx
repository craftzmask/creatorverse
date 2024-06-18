import { Link } from 'react-router-dom'
import CreatorCard from '../components/CreatorCard'

export default function ShowCreator({ creators }) {
  if (creators.length === 0) {
    return <p>There is no content creators. Please add one</p>
  }
  
  return (
    <nav className="grid">
      {creators.map(creator => <CreatorCard creator={creator} />)}
    </nav>
  )
}