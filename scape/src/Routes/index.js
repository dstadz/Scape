import React  from "react";
// import { Route } from "react-router-dom";

import LandingPage from '../Components/LandingPage'
import SignUp from "../Components/SignInUp/SignUp";
import DashBoard from '../Pages/DashBoard'


const routes = {
  '/': () => <LandingPage />,
  '/signup': () => <SignUp />,
  '/dashboard': () => <DashBoard />
}
export default routes
