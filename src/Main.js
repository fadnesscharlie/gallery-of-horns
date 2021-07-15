import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css';
import data from './data.json'
import CardColumns from 'react-bootstrap/CardColumns'

class Main extends React.Component {

  // how we can apply state
  // grab it by 'this.state.variableName'
  constructor(props) {
    super(props);
    this.state = {
      variableName: 0,
    };
  }
  render() {
    let renderedArrBeast = [];
    data.forEach(item => {
      let itemsToRender2 = <HornedBeast
        title={item.title}
        imageURL={item.image_url}
        description={item.description}
        keyword={item.keyword}
        horns={item.horns}
      />
      renderedArrBeast.push(itemsToRender2);
    })
    return (
      <main>
        <h2>Welcome to our Gallery</h2>
        <p>You can add likes or remove likes from an image and if you want to favorite </p>
        <article id="renderedBeast">
          <CardColumns>
            {renderedArrBeast}
          </CardColumns>
        </article>
      </main>
    )
  }
}

export default Main;
