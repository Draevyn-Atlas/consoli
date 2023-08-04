import React from 'react'
import Home from './Home';
import Career from './Career';
import { Routes,Route } from "react-router-dom";

const AllRoutes = () => {
  return (
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/career" element={<Career />}></Route>
        <Route path="*" element={<Error />} />
      </Routes>
    
  );
}

export default AllRoutes