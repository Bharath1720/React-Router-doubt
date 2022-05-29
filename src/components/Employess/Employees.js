import React, { Component } from 'react'
import Axios from "axios"
import {Link} from "react-router-dom"

class Employees extends Component {
  state = {
    employess : [],
    errMsg : ""
  }


  componentDidMount(){
    let dataUrl ="https://gist.githubusercontent.com/Bharath1720/49d272f6bf3357362c7d6093238d15f9/raw/714de0753a03e54190bafde008d4f5019b2658b3/contacts-list-app.json"
    Axios.get(dataUrl).then((response)=>{
      this.setState({
        employess : response.data
      })
    }).catch((err)=>{
      this.setState({
        errMsg : err
      })
    })
  }



  render() {
    return (
      <React.Fragment>
          <div className="container mt-3">
            <div className="row">
              <div className="col">
                <p className="h3 text-primary">Employess</p>
                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla at obcaecati, nam quidem expedita, facere adipisci perferendis culpa harum rerum ex in minus. Esse molestias autem eum dolorum? Molestiae rerum corrupti excepturi alias itaque quaerat labore voluptatibus ex sequi recusandae.</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
              {/* <pre>{JSON.stringify(this.state.employess)}</pre> */}
              {
                this.state.employess.length > 0 ? <React.Fragment>
                  <table className='table table-primary table-hover table-striped'>
                    <thead className='bg-dark text-white'>
                      <tr>
                        <th>Emplyee Id</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Address</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.employess.map((each)=>{
                          return(
                            <tr key={each.login.uuid}>
                              <td>{each.login.uuid.substr(each.login.uuid.length-4)}</td>
                              <td>
                                <img src={each.picture.large} width={50} height={50} />
                              </td>
                              <td>
                                <Link to={`/employess/${each.login.uuid}`}>{each.name.first} {each.name.last}</Link>
                                </td>
                              <td>{each.dob.age}</td>
                              <td>{each.email}</td>
                              <td>{each.location.city}</td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                </React.Fragment> : null
              }
              </div>
            </div>
          </div>
      </React.Fragment>
    )
  }
}
export default Employees