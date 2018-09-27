import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import './App.css';
import Task1 from './task-1/task1'
import Task2 from './task-2/task2'
import Task3 from './task-3/task3'
import Navigate from './nav-link'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <BrowserRouter>
        <div>
       <Navigate/>
          <Switch>
          <Route path='/' component={Task1} exact/>
          <Route path='/task2' component={Task2}/>
          <Route path='/task3' component={Task3}/>
          </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
