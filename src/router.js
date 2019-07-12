import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Wizard from'./components/Wizard/Wizard'

export default (
    <div>
        <Switch>
            <Route component = {Wizard} exact path= '/Wizard'/>
        </Switch>
    </div>
)