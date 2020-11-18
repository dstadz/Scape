import React from "react";
import { useRoutes } from 'hookrouter';
import { useRecoilState } from 'recoil';
import { A } from 'hookrouter'

import { Body } from './styles'
import routes from './Routes'

const links = ['signup','dashboard']
const App = () => {
  let match = useRoutes(routes)
  return (
    <Body>
      <div>
        {match}
      </div>
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
    </Body>
  );
}

export default App
