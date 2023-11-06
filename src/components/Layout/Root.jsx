import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Nav'

export default function Root() {
  return (
    <div>
        <Navbar />

        <main>
            <Outlet />
        </main>


    </div>
  )
}
