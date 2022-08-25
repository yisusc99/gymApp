import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import './css/signin.css';
import './css/homepage.css';
import { LoginSidebar } from './login-register-components/LoginSidebar'
import { LoginComponent } from './login-register-components/LoginComponent'
import { HomePage } from './home-page/HomePage';

function App() {

  return (
    // <div className='grid'>
    //   <LoginSidebar />
    //   <LoginComponent /> 
    // </div>
    <HomePage />
  )
}

export default App
