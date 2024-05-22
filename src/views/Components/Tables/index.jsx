import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

function Tables() {
    return (
        <>
            {<Outlet />}
        </>
    )
}

export default Tables