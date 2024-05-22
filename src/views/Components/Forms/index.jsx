import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

function Forms() {
    return (
        <>
            {<Outlet />}
        </>
    )
}

export default Forms