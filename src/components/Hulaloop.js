import React, { Component } from 'react'

import HulaloopImage from '../images/hulaloop.gif'

class Hulaloop extends Component {
  render() {
    return (
      <section className="main">
        <div className="item-shell">
          <figure className="item list">
            <img src={HulaloopImage} alt="HulaloopCat" />
          </figure>
        </div>
        <div className="item-number">
          <figcaption>
            <p className="number">#122</p>
            <p className="purchasable">
              {' '}
              the Hulatocat by
              <img
                src="https://avatars0.githubusercontent.com/u/20049049?s=400&v=4"
                alt="author"
              />
            </p>
          </figcaption>
        </div>
      </section>
    )
  }
}

export default Hulaloop
