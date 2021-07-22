import React from 'react';
import './HornedBeast.css';
import Card from 'react-bootstrap/Card';

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      showFavorite: false,
      favNumber: 0,
    };
  }

  // Sets favorite to image and increases Likes by 1 everytime called
  favorite = () => {
    this.setState({
      showFavorite: true,
      likes: this.state.likes + 1,
    })
    this.props.handleWalletProperty(this.props.horns)
  }

  // onclick runs function to reset/update state
  setSelectedBeast2 = () => {
    this.props.setSelectedBeast(this.props.title, this.props.description, this.props.imageUrl)
  };

  render() {
     console.log(this.props);
    return (
      <section>
        <Card className="cards">
          <p>{this.props.title}</p>
          <Card.Img
            variant="top"
            onClick={() => {
              this.favorite()
              this.setSelectedBeast2();
              }
            }
            src={this.props.imageUrl} // Render Card Image
            alt={this.props.description}
          />
          <Card.Body>
            <p>Keyword {this.props.keyword}</p>
            <p>{this.props.horns} Horn(s)</p> 
            <p>{this.state.likes} Likes
              {this.state.showFavorite ? '💖' : ''}</p>
            <p>{this.props.description}</p>
          </Card.Body>
        </Card>
      </section>
    )
  }
}
export default Section;
