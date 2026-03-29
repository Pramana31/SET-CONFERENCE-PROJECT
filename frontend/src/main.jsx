import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App'
//import ValidateApp from './ValidateApp'
import './index.css'
//import  LightSwitch from './LightSwitch'
//import StudentSearch from './StudentSearch'
//import Parent from './StudentSearch'
//import ProductParent from './ProductSearch'
//import MarksChecker from './StudentMarks'
//import ChangeBg from './bgChanger'
//import ParentStudent from './StudentSearch1'
//import ELearningApp from './ELearningApp'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import { AuthProvider } from "./context/Authcontext";

//import Details from './Details.jsx'
//import LoginValidation from './LoginValidation.jsx'

/*ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)*/

/*ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ValidateApp />
  </React.StrictMode>,
)*/

/*ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LightSwitch />
  </React.StrictMode>,
)*/

/*ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Parent />
  </React.StrictMode>
)*/

/*ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductParent />
  </React.StrictMode>
)*/

/*ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Countdo />
  </React.StrictMode>
)*/

/*ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MarksChecker />
  </React.StrictMode>
)*/

/*ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChangeBg />
  </React.StrictMode>
)*/

/*ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParentStudent />
  </React.StrictMode>
  
)*/

/*ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ELearningApp />
  </React.StrictMode>
  
)*/

const router=createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
          path:"About",
          element:<About/>
        },
        {
          path:"Contact",
          element:<Contact/>
        },
        {
          path:"User",
          element:<User/>
        },
        {
          path:"Login",
          element:<Login/>
        },
        {
          path:"Register",
          element:<Register/>
        },
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

/*ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Details />
  </React.StrictMode>
)*/

/*ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginValidation />
  </React.StrictMode>
)*/