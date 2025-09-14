import React from 'react'
import AuthProvider from './provider/AuthProvider'
import Routes from "./routes/index"
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <AuthProvider>
      <Toaster position='top-center' />
      <Routes />
    </AuthProvider>
  )
}

export default App