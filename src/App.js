import React, { Component } from 'react';

import Main from './Components/Main';
import TitleBar from './Components/Main/TitleBar';
class App extends Component {
  render() {
    return (
      <div>
        <TitleBar></TitleBar>
        <Main></Main>
      </div>
    );
  }
}

export default App;
