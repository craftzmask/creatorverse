import { useState, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'

import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'
import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'

import { supabase } from './client'

function App() {
  const [creators, setCreators] = useState([])

  useEffect(() => {
    const fetchCreators = async () => {
      const { data } = await supabase
        .from('creators')
        .select()
      setCreators(data)
    }

    fetchCreators()
  }, [])

  const addCreator = newCreator => {
    setCreators(creators.concat(newCreator))
  }

  const updateCreator = updatedCreator => {
    setCreators(
      creators.map(creator => creator.id !== updatedCreator.id ? creator : updatedCreator)
    )
  }

  const deleteCreator = deletedCreator => {
    setCreators(
      creators.filter(creator => creator.id !== deletedCreator.id )
    )
  }

  let element = useRoutes([
    {
      path: '/',
      element: <ShowCreators creators={creators} />
    },
    {
      path: 'add',
      element: <AddCreator addCreator={addCreator} />
    },
    {
      path: 'edit/:id',
      element: <EditCreator
        updateCreator={updateCreator}
        deleteCreator={deleteCreator} />
    },
    {
      path: 'view/:id',
      element: <ViewCreator deleteCreator={deleteCreator} />
    }
  ])

  return (
    <>
      <header>
        <h1>CREATORVERSE</h1>
        <nav>
          <ul>
            <li><a href='/' role='button'>View Creators</a></li>
            <li><a href='add' role='button'>Add Creator</a></li>
          </ul>
        </nav>
      </header>

      <main className='container'>
        {element}
      </main>
    </>
  )
}

export default App
