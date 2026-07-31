import axios from "axios";
import { useState} from "react";
import NavBar from "./Customer/NavBar";
import { useNavigate } from "react-router-dom";



function Login(){


    const [userName,setUserName]=useState('')
    const[password,setPassword]=useState('')
    const navigate = useNavigate();

 const onLogin= async(e)=>{
        e.preventDefault();
        console.log("Clicked Login");
        console.log(userName+" "+ password)


        try{
            let authToken = window.btoa(userName + ":" + password)
            let config = {
                headers: {
                    'Authorization': 'Basic '+ authToken
                }
            }
const res=await axios.get(`http://localhost:8080/login`,config)


    localStorage.setItem("username",userName)
    localStorage.setItem("token",res.data.token)
    localStorage.setItem("role",res.data.role)

switch(res.data?.role)
{
    case "ADMIN": 
    navigate("/admin")
    break;
    case "SELLER": 
    navigate("/seller")
    break;
    case "EXECUTIVE": 
    navigate("/executive")
    break;
    case "CUSTOMER": 
    navigate("/customer")
    break;
}

console.log(res.data)
        }
catch(err){
    console.log(err)
}
    }
    return (
       
        <div>
            <NavBar/>            
       <div className="container">
        <div className="row">
            <div className="col">

            </div>
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <div className="card-title">
                            <h3>Login</h3>
                        </div>
                        <form onSubmit={(e)=>{onLogin(e)}} >
                            <div className="col">
                                <div className="form-label">UserName: </div>
                                <div className="form-control">
                                    <input type="text"  onChange={(e)=>{setUserName(e.target.value)}}/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-label">Password: </div>
                                <div className="form-control">
                                    <input type="text"  onChange={(e)=>{setPassword(e.target.value)}}/>
                                </div>
                            </div>
                            < input type="submit" value="login"/>
                            <div className="mt-4">
                                        Don't have an account?  &nbsp;&nbsp;&nbsp;
                                        {/* <Link to='/sign-up' style={{ 'textDecoration': 'none' }}>Sign Up</Link> */}
                                    </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
       </div>
        
        </div>
    )
}
export default Login;