import React, { Component } from 'react'

export default class HeaderComponent extends Component {
  render() {
    return (
      <div id='heroic__header'>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="#">Start Bootstrap
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#heroic__navbar">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="heroic__navbar">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>

      </div>
    )
  }
}
