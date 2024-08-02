import React from 'react';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home';

function App() {

  const navigate = useNavigate();
  function ProtectedRoute({isAuthenticated, children}){
    if(!isAuthenticated){
      navigate('/login')
    }
    return children;
  }
  

  return (
    <Routes>
      <Route path='/register' element={<Register></Register>} />
      <Route path='/login' element={<Login></Login>} />
      <Route index element = {<ProtectedRoute isAuthenticated={true}><Home></Home></ProtectedRoute>}></Route>
    </Routes>
  );
}

export default App;
