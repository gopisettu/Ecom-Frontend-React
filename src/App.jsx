import { Routes, Route } from 'react-router'

import FeaturedProductList from './assets/Customer/FeaturedProductList'
import ProductList from './assets/Customer/ProductList'
import CustomerHome from './assets/Customer/CustomerHome'
function App() {


  return (
  
    <Routes>
<Route path="" element={<CustomerHome/>}>

  <Route path="" element={<FeaturedProductList/>}/>

<Route path="/product/:categoryId" element={<ProductList />} />

  
</Route>
<Route path="*" element={<h1>404 - Page Not Found</h1>}/>

    </Routes>

  )
}

export default App
