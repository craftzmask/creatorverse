import ContentCreator from '../components/ContentCreator'

const ShowCreators = ({ creators }) => {
  if (creators.length === 0) {
    return <div>No creators available</div>
  }

  return (
    <div className='card-grid'>
      {creators.map(creator => 
        <ContentCreator key={creator.id} creator={creator}/>
      )}
    </div>
  )
}

export default ShowCreators