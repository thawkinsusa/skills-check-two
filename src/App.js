import React, {Component} from 'react';
import './App.css';
import Wizard from './components/Wizard/Wizard'
import { HashRouter, Link } from "react-router-dom";
import axios from 'axios'
import router from './router'
class App extends Component{
  constructor() {
    super()
    this.state = {
   
    };

  }

 
  render() {
    return (
      <HashRouter>
        <div className="wizard-container">
          <button>
          <Link to='/Wizard'>add house</Link>
          </button>
          {router}
        </div>
        </HashRouter>
    )
}

}
export default App;
