import React, { Component } from 'react'
import { Link } from "react-router-dom";
import House from '../House/House'
import axios from 'axios';
class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            houses: [],
            id: 0
        }
    };

    componentDidMount() {
        axios
            .get('/api/houses')
            .then(res => {
                console.log('res db response', res)
                this.setState({ houses: res.data })
                console.log('houses data', this.state.houses)
            })
    }
    deleteHouse = id => {
        axios
          .delete(`/api/houses/${id}`)
          .then(res => {
            this.setState=({houses: res.data})
              ;
    
          })
      };
 

    render() {
        console.log(this.state.houses)
        return (
            <div className="dash-container">
                
                <div className='dash-top' >
                    <p className='dash-word'>Dashboard</p> 
                    <button>    
        <Link to='/Wizard' >Add New Property</Link></button>
                
                </div>
                <div>{this.state.houses.map(house => {
                    return (<div>
                        <House house={house} deleteHouse={this.deleteHouse} componentDidMount={this.componentDidMount} ></House>
                    </div>)
                })}
                </div>
                
                </div>
           

        )
    }

}

export default Dashboard