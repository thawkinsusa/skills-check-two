import React, { Component } from 'react'
import axios from 'axios'
class House extends Component {
    constructor() {
        super()
        this.state= {
        }
    };
  

    render() {
        console.log('House DELETE productid', this.props)
        return (
            <div className="House">House

                <div className='dash-info-container'>

                    <div className='dash-info'>
                        <p>{this.props.house.property}</p>
                        <p>{this.props.house.address}</p>
                        <p>{this.props.house.city}</p>
                        <p>{this.props.house.state}</p>
                        <p>{this.props.house.zipcode}</p>
                        <button className='center-buttons' onClick={()=> {this.props.deleteHouse(this.props.house.houses_id)}}> {`Delete`} </button>
                    </div>
                    </div>
                    
                </div>
        )
    }

}

export default House