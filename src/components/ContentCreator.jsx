const ContentCreator = ({ creator }) => {

  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.9) 100%), url('${creator.imageURL}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  return (
    <article className='card' style={backgroundStyle}>
      <div className='card-header-name'>
        <h1 className='pico-color-azure-400' style={{ textTransform: 'uppercase' }}>
          {creator.name}
        </h1>
      </div>

      <div className='card-header-actions'>
        <a href={`view/${creator.id}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
          </svg>
        </a>
        <a href={`edit/${creator.id}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-pencil-fill" viewBox="0 0 16 16">
            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
          </svg>
        </a>
        <a href={creator.url}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-share-fill" viewBox="0 0 16 16">
            <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"/>
          </svg>
        </a>
      </div>

      <div className='card-header-description'>
        <p>{creator.description}</p>
      </div>

    </article>
  )
}

export default ContentCreator