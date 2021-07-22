import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css';
import CardColumns from 'react-bootstrap/CardColumns'
import Form from 'react-bootstrap/Form'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wallet: 200,
      horn: 0,
    };
  }

  manageWallet = (horns) => { // Decreases the wallet by number of horns
    this.setState({
      wallet: this.state.wallet - horns,
    })
  }

  handleChange = (e) => { // Updates the state from the Form and turns it into a number
    this.setState({
      horn: parseInt(e.target.value),
    })
  }

  renderBeast() { // filters through the function to find the correct number of horns to display through state.horn
    if (this.state.horn === 0) {
      return this.props.data.map((item, idx) => (
        <HornedBeast
          handleWalletProperty={this.manageWallet}
          key={idx}
          title={item.title}
          imageUrl={item.image_url}
          description={item.description}
          keyword={item.keyword}
          horns={item.horns}
          setSelectedBeast={this.props.setSelectedBeast}
        />))
      } else { // if the user picks a number, the state will change, which will run this and return the correct images for the number of horns
      return this.props.data.filter(item => item.horns === this.state.horn).map((item, idx) => (
        <HornedBeast
          handleWalletProperty={this.manageWallet}
          key={idx}
          title={item.title}
          imageUrl={item.image_url}
          description={item.description}
          keyword={item.keyword}
          horns={item.horns}
          setSelectedBeast={this.props.setSelectedBeast}
        />))
      }
    }

  render() {
    return (
      <main>
        <h2>Welcome to our Gallery</h2>
        <p>Please click on an image to set it as your favorite.</p>
        <p> Each image will also be set to a favorite upon clicked and will reduce your wallet by the number of thier horns.</p>
        <p> Choose wisely as some cost much more then others.</p>
        <article id="renderedBeast">
          <h3>Wallet Balance: ${this.state.wallet}</h3>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Search through the images by the number of horn each image has.</Form.Label>
              <Form.Control onChange={this.handleChange}
                as="select"
                custom
                aria-label="Default select example" >
                <option value={this.state.horn}>Please Select a Number of Horns</option>  
                <option value="0">All Horns</option>
                <option value="1">One Horn</option>
                <option value="2">Two Horns</option>
                <option value="3">Three Horns</option>
                <option value="100">One Hundred Horns</option>
              </Form.Control>
            </Form.Group>
          </Form>
          <CardColumns>
            {/* Renders the images to the screen in coloums */}
            {this.renderBeast()} 
          </CardColumns>
        </article>
      </main>
    )
  }
}

export default Main;
