import React  from "react";
// import { Route } from "react-router-dom";

import LandingPage from '../Components/LandingPage'
// import Resume from '../Resume'
// import SortingPage from '../SortingPage'

// const routes = ['/', 'about', 'contacts', 'projects', 'resume', 'sortingAlgorithms' ]


const routes = {
  '/': () => <LandingPage />,
  // '/about': () => <About />,
  // '/projects': () => <Projects/>,
  // '/contact': () => <Contact/>,
  // '/canvas': () => <Canvas/>,
}
export default routes
