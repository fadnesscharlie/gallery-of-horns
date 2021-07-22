import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css';
import CardColumns from 'react-bootstrap/CardColumns'
import Form from 'react-bootstrap/Form'
// import Beastform from './Form.js';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      variableName: 0,
      wallet: 200,
      horn: 1,
      renderedArrBeast: {},
    };
  }

  manageWallet = (horns) => {
    this.setState({
      wallet: this.state.wallet - horns,

    })
  }

  filterHorns = (beastArray) => this.renderedArrBeast.filter((index) => this.renderedArrBeast[index].horns.includes(beastArray));

  handleChange = (e) => {
    this.setState({
      horn: parseInt(e.target.value),
    })
    // console.log('Beast Array', this.state.renderedArrBeast)
    // console.log('Single Horn?', this.state.renderedArrBeast[0].props.horns)
    // console.log(this.filterHorns(this.state.horn))
  }
  // this.filterHorns(this.props.renderedArrBeast.horn, this.props.renderedArrBeast.horns);
  render() {
    return (
      <main>
        <h2>Welcome to our Gallery</h2>
        <p>You can click on an image to favorite your image </p>
        <article id="renderedBeast">
          <h3>Wallet Balance: ${this.state.wallet}</h3>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Label!!!</Form.Label>
              <Form.Control onChange={this.handleChange}
                as="select"
                custom
                aria-label="Default select example" >
                <option value="">All Horns</option>
                <option value="1">One Horn</option>
                <option value="2">Two Horns</option>
                <option value="3">Three Horns</option>
                <option value="100">One Hundred Horns</option>
              </Form.Control>
            </Form.Group>
          </Form>

          <CardColumns>
            {/* If filter chooses horn, make a if statement to then run which array? */}
            {this.props.data.filter(item => item.horns === this.state.horn).map((item, idx) => (
              <HornedBeast
                handleWalletProperty={this.manageWallet}
                key={idx}
                title={item.title}
                imageUrl={item.image_url}
                description={item.description}
                keyword={item.keyword}
                horns={item.horns}
                setSelectedBeast={this.props.setSelectedBeast}
              />
            ))}

            {/* If select form is used, resets state, then displays new array with correct horned beast */}
            {/* Change this to re-render filtered horns? */}

            {/* {this.renderedArrBeast} */}
          </CardColumns>
        </article>
      </main>
    )
  }
}

export default Main;
