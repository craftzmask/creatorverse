import { useState, useEffect } from 'react'
import { useRoutes, useLocation } from 'react-router-dom'
import { supabase } from './client'
import Header from './components/Header'
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'
import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'

import './App.css'

export default function App() {
  const [creators, setCreators] = useState([])
  const location = useLocation();

  useEffect(() => {
    getCreators()
  }, [location.pathname])

  async function getCreators() {
    const { data } = await supabase.from('creators').select()
    setCreators(data)
  }

  let element = useRoutes([
    {
      path: '/',
      element: <ShowCreators creators={creators} />,
    },
    {
      path: 'edit/creators/:id',
      element: <EditCreator />
    },
    {
      path: 'add',
      element: <AddCreator />
    },
    {
      path: 'view/creators/:id',
      element: <ViewCreator />
    },
  ])

  return (
    <div>
      <Header />
      <main className="container">
        {element}
      </main>
    </div>
  )
}