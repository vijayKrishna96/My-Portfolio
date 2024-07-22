import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <main>
        <header>Header</header>
        <Outlet/>
        <footer>Footer</footer>
    </main>
  )
}
