import React from "react";
import { useRoutes } from 'hookrouter';
import { useRecoilState } from 'recoil';
import routes from './Routes'

import { Body } from './styles'
import TweetBox from './Components/TweetBox'
import NavBar from "./Components/NavBar";

const links = ['signup','dashboard']
const App = () => {
  const routeResult = useRoutes(routes)
  return (
    <Body style={{background: 'grey'}}>
      <NavBar />
      <section>
        {routeResult}
      </section>

    </Body>
  );
}

export default App
