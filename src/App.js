import React from 'react';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
import SelectedBeast from './SelectedBeast.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {
        title: '',
        desciption: '',
        imageUrl: '',
      }
    }
  }

  // Sets the state of Modal to True
  handleShowModal = () => {
    this.setState({
      showModal: true,
    })
    // how to search through the array and save the correct beast to the chosen beast
    // needs a parameter in handleShowModal for the beast
    // let beastVariable = data.find(beast => beast.title === parameter)
  };

  // Sets the state of Modal to False
  handleHideModal = () => {
    this.setState({
      showModal: false
    })
  }

  // Resetting the state and calling the modal to show to link image with the image clicked
  setSelectedBeast = (title, description, imageUrl) => {
    this.handleShowModal();
    this.setState({
      selectedBeast: {
        title: title,
        description: description,
        imageUrl: imageUrl,
      }
    })
  };

  render() {
    return (
      <>
        <Header />
        <SelectedBeast // States and pass down functions to SelectedBeast
          // handleShowModal={this.handleShowModal} // Do not need to load
          handleHideModal={this.handleHideModal}
          showModal={this.state.showModal}
          title={this.state.selectedBeast.title}
          imageUrl={this.state.selectedBeast.imageUrl}
          description={this.state.selectedBeast.description}
          selectBeast={this.state.selectedBeast}
        />
        <Main // Updates state and passes down functions to Main
          data={data} // pass data.json file to main
          handleShowModal={this.handleShowModal} // 
          // handleHideModal={this.handleHideModal} // Do not need to load
          showModal={this.state.showModal}
          setSelectedBeast={this.setSelectedBeast} // 
        />
        <Footer />
      </>
    )
  }
}

export default App;
