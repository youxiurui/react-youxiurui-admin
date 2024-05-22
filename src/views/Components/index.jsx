import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

function Components() {
    return (
        <>
            {<Outlet />}
        </>
    )
}

export default Components