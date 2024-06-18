import { useNavigate } from 'react-router-dom'

import '../App.css'

export default function App() {
  const navigate = useNavigate()

  return (
    <header className="header">
    <h1>Creatorverse</h1>
    <nav>
      <ul>
        <li>
          <button onClick={() => navigate('/')}>
            VIEW ALL CREATORS
          </button>
        </li>
        <li>
          <button onClick={() => navigate('/add')}>
            ADD A CREATOR
          </button>
        </li>
      </ul>
    </nav>
  </header>
  )
}