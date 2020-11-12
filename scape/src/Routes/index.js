import React  from "react";
// import { Route } from "react-router-dom";

import LandingPage from '../Components/LandingPage'
import SignUp from "../Components/SignInUp/SignUp";

// const routes = ['/', 'about', 'contacts', 'projects', 'resume', 'sortingAlgorithms' ]


const routes = {
  '/': () => <LandingPage />,
  '/signup': () => <SignUp />
}
export default routes
