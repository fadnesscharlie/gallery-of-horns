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

      } //might use
    }
  }
  handleShowModal = (title) => {
    let titleImg;
    // let titleImg = data.filter(title => titleImg)
    this.setState({
      showModal: true,
      imageUrl: titleImg = data.map(title => titleImg),
    })
    // make a filter/map that goes through the array to find the matching title/conditon, then take 'that' object and pass it into the modal 
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
        selectBeast={this.state.selectedBeast}
        imageUrl={this.state.selectedBeast.imageUrl}
        description={this.state.selectedBeast.desciption}
        title={this.state.selectedBeast.title}
        showModal2={this.state.showModal}
        handleShowModal={this.handleShowModal} handleHideModal={this.handleHideModal} 
        imgObject2 = "titleImg"
        />
        <Main 
        data={data} 
        handleShowModal={this.handleShowModal} handleHideModal={this.handleHideModal} 
        showModal2={this.state.showModal} 
        setSelectedBeast = {this.setSelectedBeast}
        
        
        />
        <Footer />
      </>
    )
  }
}

export default App;
