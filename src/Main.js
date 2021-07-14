import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css';
import data from './data.json'

class Main extends React.Component {
  
  // how we can apply state
  // grab it by 'this.state.variableName'
  constructor(props){
    super(props);
    this.state = {
      variableName: 0,
    };
  }

  // button method
  addOne = () => {
    this.setState({
      variableName: this.state.variableName + 1,
    })
  }
  // Call this method 'this.addOne'

  useOne = () => {
    this.setState({
      variableName: this.state.variableName - 1,
    })
  }
  // Call this method 'this.useOne'
  renderImg = () => {
    let renderedArrBeast = [];
    renderedArrBeast.push(data);
    console.log('', renderedArrBeast)
    .foreach(item =>{


      let itemsToRender2 = <HornedBeast
        title={item[item].title}
        imageURL={item[item].image_url}
        description={item[item].description}
        keyword={item[item].keyword}
        horns={item[item].horns}
      />
      renderedArrBeast.push(itemsToRender2);
      // {itemsToRender}
      
  // push them all into an array?
  // find a way to render each item in the array?
    })
    // return renderedArrBeast;
  };

  renderForLoop() {
    let renderedArrBeast = [];
    for(let i = 0; i < data.length; i++) {
      let itemsToRender3 = <HornedBeast
        title={data[i].title}
        imageURL={data[i].image_url}
        description={data[i].description}
        keyword={data[i].keyword}
        horns={data[i].horns}
      />
      renderedArrBeast.push(itemsToRender3);
    }
    return renderedArrBeast;
  }
  render1() {
    let itemsToRender3 = <HornedBeast 
        title={data[0].title}
        imageURL={data[0].image_url}
        description={data[0].description}
        keyword={data[0].keyword}
        horns={data[0].horns}
        /> 
    return itemsToRender3
  }

  render() {
    let itemsToRender = [<HornedBeast 
    title={data.title}
    imageURL={data.image_url}
    description={data.description}
    keyword={data.keyword}
    horns={data.horns}
    />,
    <HornedBeast 
    title={data.title}
    imageURL={data.image_url}
    description={data.description}
    keyword={data.keyword}
    horns={data.horns}
    />
  ]
    // make a forEach for everything
    
  

    return(
      <main>
        <h2>Welcome to our Gallery</h2>
        {/* {itemsToRender} */}
        {/* {itemsToRender} */}
        {/* {this.renderImg()} */}
        {this.renderForLoop()}
        {/* {this.render1()} */}
          {/* <p>Child here</p> */}

        {/* <HornedBeast 
          title={data[0].title}
          imageURL={data[0].image_url}
          description={data[0].description}
          keyword={data[0].keyword}
          horns={data[0].horns}
          />  */}
       
          
      </main>
      
    )
  }
}

export default Main;
