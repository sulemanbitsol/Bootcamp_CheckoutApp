import React from 'react'

import { AddProductForm } from '../../components'

const Home = () => {
  const WelcomeMessage = <p className="fs-4">MERN STACK BOOTCAMP 2022 - 2023 SECTION A</p>
  
  return (
    <div className="d-flex flex-column align-items-center">
      {WelcomeMessage}
      <AddProductForm />
    </div>
  )
}

export default Home