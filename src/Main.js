import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css';
// import data from './data.json'
import CardColumns from 'react-bootstrap/CardColumns'
import SelectedBeast from './SelectedBeast.js';


class Main extends React.Component {

  // how we can apply state
  // grab it by 'this.state.variableName'
  constructor(props) {
    super(props);
    this.state = {
      variableName: 0,
      wallet: 200,
    };
  }

  manageWallet = (horns) => {
    this.setState({
      wallet: this.state.wallet - horns,

    })
  }

  render() {
    let renderedArrBeast = this.props.data.map((item, idx) => <HornedBeast
      handleWalletProperty={this.manageWallet}
      key={idx}
      title={item.title}
      imageURL={item.image_url}
      description={item.description}
      keyword={item.keyword}
      horns={item.horns}
      handleShowModal={this.props.handleShowModal}
      setSelectedBeast={this.props.setSelectedBeast}
    />
    )
    return (
      <main>
        <h2>Welcome to our Gallery</h2>
        <p>You can click on an image to favorite your image </p>
        <article id="renderedBeast">
          <h3>Wallet Balance: ${this.state.wallet}</h3>
          <CardColumns>
            {renderedArrBeast}
          </CardColumns>
        </article>
        <SelectedBeast 
        setSelectedBeast={this.props.setSelectedBeast}
        showModal2={this.props.showModal2}
        hideModal2={this.props.handleHideModal} 
        imageURL={this.props.image_url} 
        />
      </main>
    )
  }
}

export default Main;
