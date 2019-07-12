import React, { Component } from 'react'
import { Link } from "react-router-dom";

class StepThree extends Component {
    constructor() {
        super()
        this.state = {
            recommend: '',
            mortgage: '',
            rent: '',
        }
    }

    rentCalc(num1) {
        return Math.floor(num1 * 1.25)
    }

    handleChange = (e) => {
        let { name, value } = e.target
        console.log('handlechange', this.handleChange)
        this.setState({ [name]: value })
    };

    recommended(num) {
        let { recommend } = this.state
        let total = Math.floor(num * 1.25)
        this.setState({ recommend: total })
    }

    saveInven = () => {
        const { mortgage
        } = this.state
        console.log('rent', mortgage)
        this.recommended(mortgage)
    }



    render() {
        let { recommend } = this.state
        return (
            <div className="wizard-container">
                <div className='wizard-edit'>
                    <p>Monthly Mortgage $<input value={this.state.mortgage} onChange={(e) => this.handleChange(e)} name='mortgage' /></p>
                    <p>Wanted Monthly Rent $<input value={this.state.rent} onChange={(e) => this.handleChange(e)} name='rent' /></p>
                    <p>Recommended Monthly Rent ${recommend}</p>
                </div>
                <div className='wizard-lower-three'>

                </div>
                <button><Link to='/'>Cancel</Link></button>
                <button onClick={this.saveInven}>Save your monthly mortage for a recommend monthly rent</button>
                <button><Link to='/stepTwo'>Previous step </Link></button>
            </div>
        )
    }
}
export default StepThree