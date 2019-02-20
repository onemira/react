import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Hulaloop from './components/Hulaloop'
import Vinyl from './components/Vinyl'
import Detective from './components/Detective'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Hulaloop />
        <Vinyl />
        <Detective />
        <Footer />
      </>
    )
  }
}

export default App
