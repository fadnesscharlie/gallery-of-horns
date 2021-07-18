import React from 'react';
import './HornedBeast.css';
import Card from 'react-bootstrap/Card';

class Section extends React.Component {
  // how we can apply state
  // grab it by 'this.state.numberOnHand'
  constructor(props) {
    super(props);
    this.state = {
      numberOnHand: 0,
      showFavorite: false,
      favNumber: 0,
    };
  }

  // button method
  addOne = () => {
    this.setState({
      numberOnHand: this.state.numberOnHand + 1,
    })
    this.props.handleWalletProperty(this.props.horns)
  };
  // Call this method 'this.addOne'

  useOne = () => {
    this.setState({
      numberOnHand: this.state.numberOnHand - 1,
    })
  }
  // Call this method 'this.useOne'

  favorite = () => {
    this.setState({
      showFavorite: true,
      numberOnHand: this.state.numberOnHand + 1,
    })
  }

  setSelectedBeast2 = () => {
    this.props.setSelectedBeast(this.props.title, this.props.description, this.props.imageUrl)
  };

  render() {
    return (
      <section>
        <Card className="cards">
          <p>{this.props.title}</p>
          <Card.Img
            variant="top"
            onClick={() => {
              this.favorite()
              this.addOne()
              // this.props.handleShowModal(this.props.title)// HINT HINT~~~
              this.setSelectedBeast2();
              }
            }
            src={this.props.imageUrl} // Render Card Image
            alt={this.props.description}
          />
          <Card.Body>
            <p>Keyword {this.props.keyword}</p>
            <p>{this.props.horns} Horn(s)</p>
            <p>{this.state.numberOnHand} Likes
              {this.state.showFavorite ? '💖' : ''}</p>
            <p>{this.props.description}</p>
          </Card.Body>
          {/* <Button variant="outline-success" onClick={this.addOne}>Add One</Button>
          <Button variant="outline-danger" onClick={this.useOne}>Use One</Button> */}
        </Card>
      </section>
    )
  }
}
// title={item.title}
//           imageURL={item.image_url}
//           description={item.description}
//           keyword={item.keyword}
//           horns={item.horns}
export default Section;
