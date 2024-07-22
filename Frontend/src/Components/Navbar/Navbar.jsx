import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <div>Logo</div>
        <ul>
            <li>
                <Link>Home</Link>
            </li>
            <li>
            <Link>services</Link>
            </li>
            <li>
            <Link>About me</Link>
            </li>
        </ul>
    </div>
  )
}
