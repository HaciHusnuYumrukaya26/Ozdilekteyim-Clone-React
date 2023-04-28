import React from "react";

import {BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Home from "./pages/Home";

import OnlineShopping from "./pages/OnlineShopping";


const App = () => {
  return (
    <div >
       
      <Router>
      
        <Routes>
          <Route path="/" exact element={ <Home/>}/>
          <Route path="/onlineshopping" exact element={ <OnlineShopping/>}/>

        </Routes>
      </Router>
     
    </div>
  );
};

export default App;
