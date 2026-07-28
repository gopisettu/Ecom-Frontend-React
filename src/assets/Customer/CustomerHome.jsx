import NavBar from "./NavBar"
import {Outlet} from "react-router"
function CustomerHome(){
    return(

        <div>
            <NavBar/>
            <Outlet/>
        </div>
    )
}
export default CustomerHome