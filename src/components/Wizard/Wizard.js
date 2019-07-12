import React, {Component} from 'react'
import axios from 'axios'


class Wizard extends Component {
constructor() {
    super()
    this.state = {
      property: '',
      address: '',
      city: '',
      state: '',
      zipcode:'',
      houses: []
    };

  }

  componentDidMount() {
    axios
      .get("/api/houses")
      .then(res => {
        console.log('this is the data' ,res.data)
        this.setState({ houses: res.data });
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

  clear = () => {
      this.setState({
        property: '',
        address: '',
        city: '',
        state: '',
        zipcode:''
        
      })
  }

  saveInven = () => {
      const { property,
        address, 
        city,
        state,
        zipcode
       } = this.state
      axios.post("/api/houses", { property, 
        address, 
        city,
        state,
        zipcode })
        
      
      // this.clear()
  }

  render() {
    const {property, 
      address, 
      city,
      state,
      zipcode} = this.state
    return (
        <div className="wizard-container">
            <div className='wizard-edit'>
                <p>name Name:<input value={property} onChange={(e)=>this.handleChange(e)} name='property'/></p>
                <p>description:<input value={address} onChange={(e)=>this.handleChange(e)}  name='address'/></p>
            </div>
            <div className='wizard-lower-three'>
                <p>price:<input value={city} onChange={(e)=>this.handleChange(e)} name='city' /></p>
                <p>State:<input value={state} onChange={(e)=>this.handleChange(e)} name='state'/></p>
                <p>Zipcode:<input value={zipcode} onChange={(e)=>this.handleChange(e)} name='zipcode' /></p>
            </div>
            <button className="cancel-button" onClick={this.clear}>Cancel</button>
            <button className="add-button" onClick={this.saveInven}>inventory</button>
        </div>
    )
}

}
export default Wizard