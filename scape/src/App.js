import React from "react";
import { useRoutes } from 'hookrouter';
import { useRecoilState } from 'recoil';
import { A } from 'hookrouter'

// import Nav from './components/Nav'
// import Footer from './components/Footer'

import { Body } from './styles'
// import { hueState } from './utils/store'
import routes from './Routes'
// import DashBoard from "./Pages/DashBoard";


const App = () => {
  let match = useRoutes(routes)
  console.log(match)
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
