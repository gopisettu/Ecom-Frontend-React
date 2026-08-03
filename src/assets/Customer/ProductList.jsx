import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
function ProductList(){
    const [page,setPage]=useState(0);
    const [size,setSize]=useState(8);
    const[product,setProduct]=useState([]);
    const categoryId=useParams().categoryId;
    const Api_url = `http://localhost:8080/api/product/getProduct-ByCategoryId/${categoryId}`;
    const Api_url_pagination =`http://localhost:8080/api/product/get-category/pageable/${categoryId}?page=${page}&size=${size}`;

    function pageChange(string){
   switch(string){
case "NEXT":
    setPage(page+1);
    break;
case "PREV":
    page>0?setPage(page-1):setPage(0);
    break;

}

    }
    function sizeChange(size){
        setPage(size);
    }
    useEffect(()=>{
        const getAllProductByCategoryId=(async ()=>{
            try{
                console.log("categoryId:", categoryId);
                console.log("Api_url:", Api_url);
    
                const response = await axios.get(Api_url_pagination);
    
                console.log(response.data);
    
                setProduct(response.data);
            }
            catch(err){
                console.log(err);
            }  

        })
       
                getAllProductByCategoryId()
        
    },[categoryId,page,size])
    return(
       <div className="container">
        
        <div className="card">
  <div className="card-body">
    <div className="card-title">Sort By</div>
  <div className="row mt-2 mb-2">

  <div className="form-check">
    
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
        
        <label className="form-check-label" >
          Ascending
        </label>
        <label className="form-check-label" >
          Descinding
        </label>
      </div>
  </div>
  </div>

      
        </div>
        <div className="row">
            <div className="row">
                {product.map((p,index) => (
                    
                    <div className="col-3" key={index+1}>
                        <div className="card mt-4 mb-3 " key={p.id}>
                            <img className="card-img-top" src={p.image || "https://placehold.co/300x300?text=No+Image"} alt="Card image cap" />
                            <div className="card-body">
                            <p><strong>Name:</strong> {p.title}</p>
                            <p><strong>Price:</strong> {p.price}</p>

                        <button href="#" className="btn btn-primary">Add to Cart</button>
                            </div>

                        </div>
                    </div>

                ))
                }
            
            
            </div>
            <div className="col">
            <nav aria-label="Page navigation example">
  <ul className="pagination aligin-item-center">
    <li className="page-item"><button  onClick={()=>pageChange("PREV")}  className="page-link" href="#">Previous</button></li>
    <li className="page-item"><button  onClick={()=>sizeChange(2)} className="page-link" href="#">2</button></li>
    <li className="page-item"><button  onClick={()=>sizeChange(7)} className="page-link" href="#">7</button></li>
    <li className="page-item"><button onClick={()=>sizeChange(9)}  className="page-link" href="#">9</button></li>
    <li className="page-item"><button  onClick={()=>pageChange("NEXT")}  className="page-link" href="#">Next</button></li>
  </ul>
</nav>
            </div>
            
        </div>
        </div>
    )
}
export  default ProductList