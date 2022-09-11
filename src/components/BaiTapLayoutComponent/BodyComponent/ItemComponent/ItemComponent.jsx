import React, { Component } from 'react'

export default class ItemComponent extends Component {
  render() {
    return (
      <div className='heroic__items'>
        <div className="items__content">
          <div className="row">
            {/* Item 1 */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-icon">
                  <i class="bi bi-collection"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Fresh new layout</h5>
                  <p className="card-text">With Bootstrap 5, we've created a fresh new layout for this template!</p>
                </div>
              </div>
            </div>
            {/* Item 2 */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-icon">
                  <i class="bi bi-cloud-download"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Free to download</h5>
                  <p className="card-text">As always, Start Bootstrap has a powerful collectin of free templates.</p>
                </div>
              </div>
            </div>
            {/* Item 3 */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-icon">
                  <i class="bi bi-card-heading"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Jumbotron hero header</h5>
                  <p className="card-text">The heroic part of this template is the jumbotron hero header!</p>
                </div>
              </div>
            </div>
            {/* Item 4 */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-icon">
                  <i class="bi bi-bootstrap"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Feature boxes</h5>
                  <p className="card-text">We've created some custom feature boxes using Bootstrap icons!</p>
                </div>
              </div>
            </div>
            {/* Item 5 */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-icon">
                  <i class="bi bi-code"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Simple clean code</h5>
                  <p className="card-text">We keep our dependencies up to date and squash bugs as they come!</p>
                </div>
              </div>
            </div>
            {/* Item 6 */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-icon">
                  <i class="bi bi-patch-check"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">A name you trust</h5>
                  <p className="card-text">Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
