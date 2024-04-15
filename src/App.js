import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from './components/About'
import Error from "./components/Error";
import RestaurentMenu from './components/RestaurentMenu'
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

const AppComponent=()=>{
   return (
      <div className="app">
         <Header/>
         <Outlet/>
         
         

      </div>
   )
}

const appRouter=createBrowserRouter([
   {
      path:"/",
      element:<AppComponent/>,
      children:[
         {
            path:'/',
            element:<Body/>
         },
         {
            path:"/about",
            element:<About/>,
            
         },
         {
            path:"/restaurents/:restId",
            element:<RestaurentMenu/>,
            
         }
       
      ],
      errorElement:<Error/>
     
   },
   
])




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
