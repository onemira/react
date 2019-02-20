import React, { Component } from 'react'
import Header from '../images/logo.png'

class NavBar extends Component {
  render() {
    return (
      <nav className="header">
        <img src={Header} height="19" alt="logo" />
        <ul>
          <li>
            <a href="http://feeds.feedburner.com/Octocats"> RSS </a>
          </li>
          <li>
            <a href="https://octodex.github.com/faq.html"> FAQ </a>
          </li>
          <li>
            <a href="https://github.com"> Back to GitHub </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavBar
