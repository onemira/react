import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <nav className="end">
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
        <p>© 2013 – 2019 GitHub, Inc. All rights reserved.</p>
      </nav>
    )
  }
}

export default Footer
