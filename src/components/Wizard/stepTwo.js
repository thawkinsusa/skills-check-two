import React, { Component } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

class StepTwo extends Component {
    constructor() {
        super()
        this.state = {
            image_url: []

        }
    }

    componentDidMount() {
        axios
            .get("/api/image")
            .then(res => {
                console.log('this is the data', res.data)
                this.setState({ image_url: res.data });
            })
            .catch(err => {
                console.log("error", err);
            });
    }

    handleChange = (e) => {
        let { name, value } = e.target
        console.log('handlechange', this.handleChange)
        this.setState({ [name]: value })
    };

    render() {
        return (
            <div className="wizard-container">
                <div className='wizard-edit'>
                    <p>Image url:<input placeholder='does not work next step does' value={this.state.image_url} onChange={(e) => this.handleChange(e)} name='image_url' /></p>
                </div>
                <div className='wizard-lower-three'>

                </div>
                <button><Link to='/'>Cancel</Link></button>
                <button className="add-button" onClick={this.saveInven}>Complete</button>
                <button><Link to='/stepThree'>Next step</Link></button>
                <button><Link to='/Wizard'>Previous step </Link></button>
            </div>
        )
    }
}
export default StepTwo