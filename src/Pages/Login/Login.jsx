import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./login.css";
import netflix_spinner from "../../assets/netflix_spinner.gif"
import {login , signup} from "../../firebase"
const Login = () => {
  const [signState , setSignState]= useState("Sign In")
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");

  const [password , setPassword ] = useState("");
  const [loading , setloading] = useState(false)

  
   const user_auth = async (event)=>{
    event.preventDefault();
   
    setloading(true);
    if(signState === "Sign In"){
      await login(email , password)
    }else{
      await signup(name , email , password)
      setloading(false)
    }
   }
  return (
    loading ? <div className="loading-spinner">
      <img src={netflix_spinner} alt="" />
    </div> :
    <div className="login">
      <div className="login-form">
        <img src={logo} alt="logo" />
        <h1>Sign Up</h1>
        <form>
        {signState === "Sign Up" ?          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your Name" />
     : <></>}
          <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value) }/>
          <input type="password" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <button onClick={user_auth} type="submit">{signState}</button>

          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
        {signState === "Sign In" ?           <p>New to Netfliex <span onClick={()=> setSignState("Sign Up")}>Sign Up Now</span></p>
: <p>Already hane account<span onClick={()=> setSignState("Sign Ip")}>Sign In Now</span></p>}
      
      
        </div>
      </div>
    </div>
  );
};

export default Login;
