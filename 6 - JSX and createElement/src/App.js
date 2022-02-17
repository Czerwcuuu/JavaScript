import React from 'react';
import './App.css';

class App extends React.Component {

  render(){
    return(
      <div className='App'>
        <h1 className='Red-color'>
          Aplikacja React - JSX
        </h1>
      </div>
      //React.createElement('div',{className: 'App'},React.createElement('h1',{className: 'Red-color'},'Aplikacja React - createElement'))
    );
  }

}

export default App;