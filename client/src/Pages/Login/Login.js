import React from "./node_modules/react";
import { Link, Redirect, NavLink } from './node_modules/react-router-dom'
import GlobalContext from "../../Context/globalContext";
import Auth from "../../utils/Auth"
import Nav from "../../components/Nav";

class Login extends React.Component { 
  state = {};
  
  handleLoginGithub = () => {
    console.log("user:", this.state.user)
    Auth.loginGithub().then((res)=>{
      return res.data
    })
  }
  
  render() {
    
    const global = this.context;
    return (
      <div>
        <Nav/>
          <p>{global.user}</p>
      </div>
    );
  }
};

Login.contextType = GlobalContext;
export default Login;