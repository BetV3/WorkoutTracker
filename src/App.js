import logo from './logo.svg';
import './App.css';
import AddWorkout from './components/AddWorkout';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';



function App() {
  const isAuthenticated = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Registration />}/>
        <Route
          exact
          path='/AddWorkout'
          render={() => (isAuthenticated ? <AddWorkout/> : <Navigate to='/register' />)}
          />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
