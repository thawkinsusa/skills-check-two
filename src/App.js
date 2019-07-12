import React, {Component} from 'react';
import './App.css';
import { HashRouter, Link } from "react-router-dom";
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
          <Link to='/dashboard'></Link>
          </button>
          {router}
        </div>
        </HashRouter>
    )
}

}
export default App;
