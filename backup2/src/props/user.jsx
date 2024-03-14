import React,{Component} from "react"
import Employee from "./employee"
class User extends Component{
    user={
        uid:101,
        uname:"sunil acharya",
        uemail:"sunil@gmail.com"
    }
    ploc=["udupi","kochi","goa","banglore"]


    render(){
        return <div>
            <h2>User Component</h2>
            <hr/>
            <Employee user={this.user} loc={this.ploc}/>
        </div>
    }

    }
  export default User