import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Restaurant_Finder from './Restaurant_Finder.js';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
            
    
            <Restaurant_Finder />
       
      </BrowserRouter>

    );
  }
}

export default App;
