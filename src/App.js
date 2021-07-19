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
  
  handleShowModal = () => {
    this.setState({
      showModal: true,
    }) 
  };

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

  handleHideModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    return(
      <>
        <Header />
        <SelectedBeast 
        handleShowModal={this.handleShowModal} 
        handleHideModal={this.handleHideModal} 
        showModal2={this.state.showModal}
        title={this.state.selectedBeast.title}
        imageUrl={this.state.selectedBeast.imageUrl}
        description={this.state.selectedBeast.desciption}
        selectBeast={this.state.selectedBeast}
        />
        <Main 
        data={data} 
        handleShowModal={this.handleShowModal} 
        handleHideModal={this.handleHideModal} 
        showModal2={this.state.showModal} 
        setSelectedBeast = {this.setSelectedBeast}
        />
        <Footer />
      </>
    )
  }
}

export default App;
