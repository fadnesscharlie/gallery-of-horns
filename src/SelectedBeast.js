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
          show={this.props.showModal2}
          onHide={this.props.hideModal2}>
          <Modal.Header closeButton>
            <Modal.Title>This is my Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              id='modalImage'
              src={this.props.imageUrl}
              alt='.'
            />
            <p>{this.props.description}</p>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}

export default SelectedBeast;

