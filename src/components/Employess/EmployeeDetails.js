import React, { Component } from 'react'


import Axios from "axios"

class EmployeeDetails extends Component {
   
  render() {
    return (
      <React.Fragment>
          <pre>{JSON.stringify(props.match.params.id)}</pre>
          <div className="conatiner m-3">
              <div className="row">
                  <div className="col">
                  <p className="h3 text-primary">Employee Details</p>
                  <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequatur perspiciatis accusantium ipsa modi itaque necessitatibus officiis consequuntur vitae ea, ratione id beatae sunt pariatur officia sint recusandae ab harum.</p>
                  </div>
              </div>
          </div>
      </React.Fragment>
    
    )
  }
}
export default EmployeeDetails