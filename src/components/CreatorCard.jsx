import { Link } from 'react-router-dom'

export default function CreatorCard({ creator }) {
  const cardBackground = {
    content: "",
    position: 'absolute',
    backgroundImage: `url("${creator.imageURL}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.3,
    width: '100%',
    height: '100%',
    zIndex: -1
  }

  const cardHeader = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }

  const cardBody = {
    padding: 20,
    paddingTop: 130
  }

  return (
    <div className="card">
      <div style={cardBackground}></div>
      
      <div style={cardBody}>
        <div style={cardHeader}>
          <h3 style={{ color: '#0472AD' }}>{creator.name}</h3>
          <nav>
            <ul>
              <li>
                <Link to={creator.url} class="contrast">
                  <i className="bi bi-link-45deg"></i>
                </Link>
              </li>
              <li>
                <Link to={`view/creators/${creator.id}`} class="contrast">
                  <i className="bi bi-eye"></i>
                </Link>
              </li>
              <li>
                <Link to={`edit/creators/${creator.id}`} class="contrast">
                  <i className="bi bi-pencil"></i>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p>{creator.description}</p>
      </div>
    </div>
  )
}