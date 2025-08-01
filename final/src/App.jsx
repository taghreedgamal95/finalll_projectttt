import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Componants/Home/Home';
import Log from './Componants/Log/Log'
import Parent from './Componants/parent/Parent';
import Child from './Componants/Child/Child';
import Notfound from './Componants/Notfound/Notfound';
import Store from './Componants/Store/Store';
import {useState } from 'react';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  

  const routes= createBrowserRouter([
    {path:'/', element: <Home></Home>, children:[
    {path:'/Log',element: <Log></Log>},
    {path:'/parent',element: <Parent></Parent>},
    {path:'/child',element: <Child></Child>},
    {path:'*',element: <Notfound></Notfound>},
    {path:'Store',element: <Store></Store>},
    ]},
  ])
    
  return (
    <>
    < RouterProvider router={routes} />
 
    </>
  )
}

export default App