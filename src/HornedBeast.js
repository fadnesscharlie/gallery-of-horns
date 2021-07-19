import React from 'react';
import './HornedBeast.css';
import Card from 'react-bootstrap/Card';

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOnHand: 0,
      showFavorite: false,
      favNumber: 0,
    };
  }

  addOne = () => {
    this.setState({
      numberOnHand: this.state.numberOnHand + 1,
    })
    this.props.handleWalletProperty(this.props.horns)
  };

  useOne = () => {
    this.setState({
      numberOnHand: this.state.numberOnHand - 1,
    })
  }

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
        </Card>
      </section>
    )
  }
}
export default Section;
