import { useEffect, useState } from "react";
import NavBar from "../Customer/NavBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminDashboard(){
    const navigate = useNavigate();
    const [checking, setChecking] = useState(true);

    useEffect(()=>{
        const verify = async () => {
            console.log("In verify")

            try{
                console.log("inside try")
                let token = localStorage.getItem("token")
                let username = localStorage.getItem("username")
                let role = localStorage.getItem("role")
                const config = {
                    headers:{
                        "Authorization":"Bearer "+token
                    }
                }

                const res = await axios.get(`http://localhost:8080/api/admin/user-details`, config)
                console.log("response api data ", res.data)

                if (
                    res.data.role !== "ADMIN" ||
                    res.data.username !== username ||
                    res.data.role !== role
                ) {
                    localStorage.clear();
                    navigate("/login");
                } else {
                    setChecking(false);
                }

            } catch(err){
                console.log(err)
                localStorage.clear();
                navigate("/login");
            }
        }
        verify()

    },[])

    if (checking) return null;

    return(
        <div>
        <NavBar/>
        <h2>Admin Dashboard</h2>
        </div>
    )
}
export default AdminDashboard;