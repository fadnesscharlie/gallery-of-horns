import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
// import Image from 'react-bootstrap/Image';

// import HornedBeast from './HornedBeast.js';

class SelectedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {}, //might use
    }
  }
  // handleShowModal = () => {
  //   this.setState({
  //     showModal: true
  //   })
  // }
  // handleHideModal = () => {
  //   this.setState({
  //     showModal: false
  //   })
  // }

  image1 = this.props.imageURL;
  image3 = this.props.imageUrl;
  render() {
    return (
      <>
        <Modal 
        show={this.props.showModal2} 
        onHide={this.props.hideModal2}>
          <Modal.Header closeButton>
            <Modal.Title> 
              This is my Modal {this.props.imageUrl}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={this.props.imageUrl}
              alt="here"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button 
            variant="secondary" 
            onClick={this.props.hideModal2}>Close</Button>
          </Modal.Footer>
          </Modal>
      </>
    )
  }
}

export default SelectedBeast;

