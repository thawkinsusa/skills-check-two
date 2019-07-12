import React, { Component } from 'react'

class House extends Component {
    constructor(props) {
        super(props)
        this.state= {
        }
    };
    
    render() {
        return (
            <div className="House">House

                <div className='dash-info-container'>

                    <div className='dash-info'>
                        <p>{this.props.house.property}</p>
                        <p>{this.props.house.address}</p>
                        <p>{this.props.house.city}</p>
                        <p>{this.props.house.state}</p>
                        <p>{this.props.house.zipcode}</p>
                    </div>
                    </div>
                </div>
        )
    }

}

export default House