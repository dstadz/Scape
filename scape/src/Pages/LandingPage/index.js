import React from 'react'
import { A } from 'hookrouter'

import { LandingPageContainer } from  './styles'

const LandingPage = () => {
  return (
    <LandingPageContainer>
    <nav>
      <h1> Scape </h1>

    </nav>
      <h2> Start your journey now </h2>
      <button><A href='/signup'> Sign Up </A></button>
      <br />
      <button><A href='/dashboard'> dashboard </A></button>
    </LandingPageContainer>
  )
}

export default LandingPage
