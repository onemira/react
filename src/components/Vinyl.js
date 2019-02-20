import React, { Component } from 'react'

import VinylImage from '../images/vinyl.png'

class Vinyl extends Component {
  render() {
    return (
      <section className="main">
        <div className="item-shell">
          <figure className="item list">
            <img src={VinylImage} alt="vinylcat" />
          </figure>
        </div>
        <div className="item-number">
          <p>#122</p>
          <p className="purchasable">
            Vinyltocat
            <img
              src="https://avatars0.githubusercontent.com/u/7002940?s=400&v=4"
              alt="cat"
            />
          </p>
        </div>
      </section>
    )
  }
}

export default Vinyl
