import React from 'react'
import { Outlet } from 'react-router-dom'

function AuthManage() {
  return (
    <>
      {<Outlet />}
    </>
  )
}

export default AuthManage