import React from 'react'
import { A } from 'hookrouter'

const links = ['signup','dashboard']
const NavBar = () => {
  return (
    <div>
      <ul>
        {links.map(n => (
          <li key={n}>
            <A href={`/${n}`} >{n}</A>
          </li>
        ))}
        <li key={'landingpage'}>
          <A href={`/`} > landingpage </A>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
