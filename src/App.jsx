import { Routes, Route } from 'react-router-dom'

import FeaturedProductList from './assets/Customer/FeaturedProductList'
import ProductList from './assets/Customer/ProductList'
import CustomerHome from './assets/Customer/CustomerHome'
import Login from './assets/Login'
import AdminDashboard from './assets/Admin/adminDashboard'
import SellerDashboard from './assets/Seller/sellerDashboard'
import ExecutiveDashboard from './assets/Executive/executiveDashboard'
function App() {


  return (
  
    <Routes>
<Route path="" element={<CustomerHome/>}>

  <Route path="" element={<FeaturedProductList/>}/>

<Route path="/product/:categoryId" element={<ProductList />} />

  
</Route>
<Route path="/login" element={<Login/>} />
<Route path="/admin" element={<AdminDashboard/>}/>
<Route path="/seller" element={<SellerDashboard/>}/>
<Route path="/executive" element={<ExecutiveDashboard/>}/>


<Route path="*" element={<h1>404 - Page Not Found</h1>}/>

    </Routes>

  )
}

export default App
