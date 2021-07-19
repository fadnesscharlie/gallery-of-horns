import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css';
import CardColumns from 'react-bootstrap/CardColumns'



class Main extends React.Component {
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
      imageUrl={item.image_url}
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
      </main>
    )
  }
}

export default Main;
