import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './SelectedBeast.css';

class SelectedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {},
    }
  }
  render() {
    return (
      <>
        <Modal 
          // Show and Hide Modal, updates here to show or hide
          show={this.props.showModal} // Hides Modal on load
          onHide={this.props.handleHideModal}>
          <Modal.Header closeButton>
            <Modal.Title>
              {/* Description of image */}
              <p>{this.props.description}</p> 
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img // Image of Modal
              id='modalImage'
              src={this.props.imageUrl}
              alt={this.props.description}
            />
          </Modal.Body>
        </Modal>
      </>
    )
  }
}

export default SelectedBeast;

