import React, { Component } from 'react'

export default class BannerComponent extends Component {
  render() {
    return (
      <div className='heroic__banner'>
        <div className="banner__top">
          <span className="top__title">
            A warm welcome!
          </span>
        </div>
        <div className="banner__middle">
          <p className="middle__text">
            Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?
          </p>
        </div>
        <div className="banner__bottom">
          <button className="bottom__btn">
            Call to action
          </button>
        </div>
      </div>
    )
  }
}
