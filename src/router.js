import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Wizard from'./components/Wizard/Wizard'
import Dashboard from './components/Dashboard/Dashboard'
import stepTwo from './components/Wizard/stepTwo'
import stepThree from './components/Wizard/stepThree'
export default (
    <div>
        <Switch>
            <Route component = {Dashboard} exact path='/'/>
            <Route component = {Wizard} path= '/Wizard'/>
            <Route component = {stepTwo} path='/stepTwo'/>
            <Route component= {stepThree} path='/stepThree'/>
        </Switch>
    </div>
)