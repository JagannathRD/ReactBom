import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
// import CompareView from './components/CompareView';

import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Box from '@material-ui/core/Box';
import Main from './components/BOMLangingPage'

import compare from './components/Compare'
import Compare from './components/Compare';
import SignComponent from './components/SignComponent';
import CompareView from './components/CompareView';
import { WitRouter } from './components/HeaderComponent';
import User from './Data/User.json'
import Accessdenied from './components/Accessdenied'


function App() {
  useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/users").then(y=>y.json()).then(json=>setUser(json[0].name)).
      catch(error=>console.log('no user Error',error))
      
  },[])

  const[user,setUser]=useState('');

  return (
    <>
{sessionStorage.setItem('user',user)}

    {/* <Main /> */}
<BrowserRouter>
{/* <ul>
  <li>
  <Link to='/compare'>go to table</Link>
  <Link to='/' >go </Link>
  </li>
</ul> */}

  <Routes>
  {user==='' ? <Route path="/" element={<Accessdenied/>}></Route>
:<Route path="/" element={<Main />}></Route>
        }

  
    <Route path="/compare" element={<Compare />}></Route>

    <Route path='/sign' element={<SignComponent />}></Route>
    <Route path='/compareView' element={<CompareView />}></Route>

    </Routes>
    {/* <WitRouter></WitRouter> */}
</BrowserRouter>
    </>
  );
}

export default App;
