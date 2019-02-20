import React, { Component } from 'react'

import DetectiveImage from '../images/detective.jpg'

class Detective extends Component {
  render() {
    return (
      <section className="main">
        <div className="item-shell">
          <figure className="item list">
            <img src={DetectiveImage} alt="detectiveCat" />
          </figure>
        </div>
        <div className="item-number">
          <figcaption>
            <p className="number">#122</p>
            <p className="purchasable">
              {' '}
              the detective cat by{' '}
              <img
                src="https://avatars0.githubusercontent.com/u/20049049?s=400&v=4"
                alt="Hulatocat"
              />{' '}
            </p>
          </figcaption>
        </div>
      </section>
    )
  }
}

export default Detective
