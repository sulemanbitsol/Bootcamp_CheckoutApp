import React from 'react'
import { Navigate } from 'react-router-dom'
import { Footer, Header } from '../components'

const ProtectedRoute = ({ children }) => {
  return localStorage.getItem("auth_token") ? (
    <>
      <Header />
      {children}
      <Footer />
    </>
  ) : (
    <Navigate to="/auth/login" replace />
  )
}

export default ProtectedRoute