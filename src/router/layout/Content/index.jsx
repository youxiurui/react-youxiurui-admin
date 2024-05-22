import React from 'react'
import { Outlet } from 'react-router-dom'

function Content() {

  return (
    <>
      {<Outlet />}
    </>
  )
}

export default Content
