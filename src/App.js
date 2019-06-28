import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Main from './Components/Main';
import TitleBar from './Components/Main/TitleBar';
import CreateEvent from './Components/CreateEvent';
import NavBar from './Components/NavBar';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
            <TitleBar></TitleBar>
            <Route path="/" exact component={Main} />
            <Route path="/add" exact component={CreateEvent} />
        </Router>
        <NavBar position="fixed" ></NavBar>
      </div>
      
    );
  }
}

export default App;
