import React, { Component } from 'react'
import "../../../src/App.css"

class Home extends Component {
  render() {
    return (
      <React.Fragment>
          <div className="landing-page">
            <div className="wrapper">
              <div className='d-flex flex-column justify-content-center text-center align-item-center h-100'>
                <h2 className='display-2'>Welcome to React Routing</h2>
                <div className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, laudantium. Optio voluptas hic maiores. Culpa nulla explicabo, porro officiis voluptate cum quidem ullam vitae eum quam fuga mollitia, obcaecati possimus magnam voluptas odit! Minus unde ipsam sapiente delectus consequuntur placeat?</div>
              </div>
            </div>
          </div>
      </React.Fragment>
    )
  }
}

export default Home