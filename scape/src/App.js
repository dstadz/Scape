import React from "react";
import { useRoutes } from 'hookrouter';
import { useRecoilState } from 'recoil';

// import Nav from './components/Nav'
// import Footer from './components/Footer'

import { Body } from './styles'
// import { hueState } from './utils/store'
import routes from './Routes'


const App = () => {
  let match = useRoutes(routes)

  return (
    <Body>
      {match}
    </Body>
  );
}

export default App
