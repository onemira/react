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
        <section className="cat-container">
          <Hulaloop />
          <Vinyl />
          <Detective />
        </section>
        <Footer />
      </>
    )
  }
}

export default App
