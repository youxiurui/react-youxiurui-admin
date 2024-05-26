import React from 'react'
import { useRoutes } from 'react-router-dom'
import routers from './router'

function App() {

  const Element = useRoutes(routers)

  return (
    <>
      {Element}
    </>
  )
}

export default App
