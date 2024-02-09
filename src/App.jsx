import { Provider } from 'react-redux'
import './App.css'
import Header from './Components/Required/Header'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout'
import Clothing from './Components/Required/Clothing'
import Accessories from './Components/Required/Accessories'
import Electronics from './Components/Required/Electronics'
import Home from './Components/Required/Home'
import Groceries from './Components/Required/Groceries'
import { Store } from './Redux/Store';
import Register from './Components/Pages/Register'
import React, { useEffect } from 'react';
import axios from 'axios';
import { setCurrentSearch } from "../src/Redux/HeaderSlice"
import SingleProduct from './Components/SingleProduct'
function App() {
  // const [productData, setProductData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const options = {
  //       method: 'GET',
  //       url: 'https://amazon-product-data6.p.rapidapi.com/product-by-text',
  //       params: {
  //         keyword: 'iphone',
  //         page: '1',
  //         country: 'IN'
  //       },
  //       headers: {
  //         'X-RapidAPI-Key': 'fc9d601745mshaf6c2cd06048991p19825ajsn503caa821889',
  //         'X-RapidAPI-Host': 'amazon-product-data6.p.rapidapi.com'
  //       }
  //     };

  //     try {
  //       const response = await axios.request(options);
  //       console.log(response.data);
  //       setCurrentSearch(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []); 
  const router=createBrowserRouter([
    {
      path:"/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "clothing",
          element: <Clothing />
        },
        {
          path: "accessories",
          element: <Accessories />
        },
        {
          path:"groceries",
          element: <Groceries />
        },
        {
          path: "electronics",
          element: <Electronics />
        },
        {
          path:"Register",
          element:<Register />
        },
        {
          path:"singleProduct/:asin",
          element:<SingleProduct />
        }
      ] 
    }
  ])
  
  return (

      <Provider store={Store}>
        <RouterProvider router={router} />
      </Provider>

  )
}

export default App
