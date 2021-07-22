import React from 'react';
import Form from 'react-bootstrap/Form'

// export into main?

class Beastform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // default at 1
      horn: 1,
    }
  }

  // function to filter out horns needed for re-render
  filterHorns(hornValue, beastArray) {
    return beastArray.filter(index => hornValue.includes(index))
  }

  // this.filterHorns(this.props.renderedArrBeast.horn, this.props.renderedArrBeast.horns);

  // somewhere in here ternary
  // let this.state.chosen = this.props.horn === 1 ? 1 : this.props.horn === 2 ? 2 : this.props.horn === 3 ? 3 : 100;

  // function to display only the number of horns
  // displayChosenHorn() {

  // }

  // update state depending on what is chosen
  handleChange(e){
    this.setState({horn: e.target.value})
  }

  render() {
    return (
      <Form.Select aria-label="Default select example" onChange={this.handleChange}>
        <Form.Group controlId="name">
        <option>Open this select menu</option>
        <option value="1">One Horn</option>
        <option value="2">Two Horns</option>
        <option value="3">Three Horns</option>
        <option value="100">One Hundred Horns</option>
        </Form.Group>
      </Form.Select>
    )
  }
}

export default Beastform;

















function whichIceCream(topping, iceCream) {
  return 'Mark likes ' + iceCream + 'and' + topping;
}

whichIceCream('Vanilla', 'sprinkles');
