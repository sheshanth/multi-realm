import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Login from "./components/login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route exact path="/" render={() => <Redirect to="/login" />}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
