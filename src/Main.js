import React from 'react';
import Section from './HornedBeast.js';
import './Main.css';

class Main extends React.Component {
  render() {
    return(
      <main>
        <h2>Welcome to our Gallery</h2>
        <Section 
          title="Single Horn Love"
          imageURL="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"

          alt="Unicorn and whale with horn"
          description="Land and water hold no barrier for love"
        />
        <Section 
          title="Rhino Horns"
          imageURL="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80"
          alt="Rhinos with horns"
          description="Family of Rhino's"
        />
        <Section 
          title="Next Gen Horns"
          imageURL="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg"
          alt="Unicorn in sweater"
          description="Something we only see in movies"
        />
          
      </main>
      
    )
  }
}

export default Main;
