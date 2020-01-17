import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

import Dashboard from "./pages/dashboardPage/DashboardPage";
import SignIn from "./pages/SignInPage/SignInPage";
import SignUp from "./pages/SignUpPage/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/dashboard" exact component={Dashboard} />
      </div >
    </BrowserRouter>
  );
}

export default App;
