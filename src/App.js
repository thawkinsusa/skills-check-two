import React, {Component} from 'react';
import axios from 'axios'
import './App.css';






class App extends Component{
  constructor() {
    super()
    this.state = {
      name: '',
      description: '',
      price: '',
      image_url:'',
      product:''
    };

  }

  componentDidMount() {
    axios
      .get("/api/products")
      .then(res => {
        console.log('this is the data' ,res.data)
        this.setState({ product: res.data });
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
          name: '',
          description: '',
          price: '',
          image_url: '',
        
      })
  }

  saveHouse = () => {
      const { name,
          description, 
          price,
          image_url,
       } = this.state
      axios.post("/api/products", { name, description, price, image_url }).then(res => {
          this.componentDidMount()
      })
      // this.clear()
  }

  render() {
    const {name, description, price, image_url} = this.state
    return (
        <div className="wizard-container">
            <div className='wizard-edit'>
                <p>name Name:<input value={name} onChange={(e)=>this.handleChange(e)} name='name'/></p>
                <p>description:<input value={description} onChange={(e)=>this.handleChange(e)}  name='description'/></p>
            </div>
            <div className='wizard-lower-three'>
                <p>price:<input value={price} onChange={(e)=>this.handleChange(e)} name='price' /></p>
                <p>image_url:<input value={image_url} onChange={(e)=>this.handleChange(e)} name='image_url'/></p>
            </div>
            <button className="cancel-button" onClick={this.clear}>Cancel</button>
            <button className="add-button" onClick={this.saveHouse}>Add House</button>
        </div>
    )
}

}
export default App;
