import React, {Component,Fragment}from "react"
class Employee extends Component{
    render(){
          return <Fragment>
            <h1>Employee component</h1>
           <pre>{JSON.stringify(this.props)}</pre>
           <h3>Employee.ID:{this.props.user.uid}</h3>
           <h3>Employee Name:{this.props.user.uname}</h3>
           <h3>Employee Email:{this.props.user.uemail}</h3>
           <h4>Employee.loc:{this.props.loc[3]}</h4>

          </Fragment>

          
    }
 }
  export default Employee