import { Link } from "react-router";
import { useEffect,useState } from "react";
import axios from "axios";

const NavBar=()=>{
    const [category,setCategory]=useState([]);
const url_getAllCategory="http://localhost:8080/api/category/getAll";
    useEffect(()=>{

        const getAllCategory=(async ()=>{
            try{
            const response = await axios.get(url_getAllCategory)
            console.log(response.data);
setCategory(response.data)
            }catch(err){console.log(err)}

        })
        getAllCategory();
        
    },[])
    return (
        <>
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Hexa-Ecom</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      
      <li className="nav-item">
        <Link to="" className="nav-link">Featued Products</Link>
      </li>
      <li className="nav-item">
        <Link to="/users" className="nav-link" >Users</Link>
      </li>
      <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"> View By Category
    </a>
    <ul className="dropdown-menu">
        {
            category.map((c,index)=>(

                <li key={index}><Link  to= {`/product/${c.id}`} className="dropdown-item" href="#">{c.name}</Link></li>
            ))
        }
    
    
    </ul>
  </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
        </>
    )
}
export default NavBar;