import React, { Component } from 'react'
import axios from 'axios'
class House extends Component {
    constructor() {
        super()
        this.state = {
            image_url: ''
        }
    };

    componentDidMount() {
        axios
            .get("/api/image")
            .then(res => {
                console.log('this is the data from IMAGE', res.data)
                this.setState({ image_url: res.data });
            })
            .catch(err => {
                console.log("error", err);
            });
    }


    render() {
        let { image_url } = this.state
        console.log('image', image_url)
        console.log('House DELETE productid', this.props)
        return (
            <div className="House">House

                <div className='dash-info-container'>

                    <div className='dash-info'>
                        <img width='50%' src='https://i.kinja-img.com/gawker-media/image/upload/s--bIV3xkEm--/c_scale,f_auto,fl_progressive,q_80,w_800/jsprifdd1gmfy7e7nola.jpg' />
                        <p>{this.props.house.property}</p>
                        <p>{this.props.house.address}</p>
                        <p>{this.props.house.city}</p>
                        <p>{this.props.house.state}</p>
                        <p>{this.props.house.zipcode}</p>
                        <button className='center-buttons' onClick={() => { this.props.deleteHouse(this.props.house.houses_id) }}> {`Delete`} </button>
                    </div>
                </div>

            </div>
        )
    }

}

export default House