import React from 'react';
import Button from 'react-bootstrap/Button';
import './HornedBeast.css';
// I think this works?
import Card from 'react-bootstrap/Card';

class Section extends React.Component {

  // how we can apply state
  // grab it by 'this.state.numberOnHand'
  constructor(props){
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
  }
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
    })
  }

  render() {
    return (
      <section>
        {/* <CardColumns> */}
        <Card className="cards">
        <p>{this.props.title}</p>
        <Card.Img variant="top"
          src={this.props.imageURL}
          alt={this.props.description}
        />
        <p>Keyword {this.props.keyword}</p>
        <p>{this.props.horns} Horn(s)</p>
        <p>{this.state.numberOnHand} Available</p>
        <p>{this.state.showFavorite ? '💖' : ''}</p>
        <p onClick={this.favorite}>{this.props.description}</p>
        <Button variant="outline-success" onClick={this.addOne}>Add One</Button>
        <Button variant="outline-danger" onClick={this.useOne}>Use One</Button>
        </Card>
        {/* </CardColumns> */}
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
