import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Wizard from'./components/Wizard/Wizard'
import Dashboard from './components/Dashboard/Dashboard'

export default (
    <div>
        <Switch>
            <Route component = {Wizard} exact path= '/Wizard'/>
            <Route component = {Dashboard} exact path='/'/>
        </Switch>
    </div>
)