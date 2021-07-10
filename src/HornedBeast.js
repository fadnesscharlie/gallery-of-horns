import React from 'react';

class Section extends React.Component {
  render() {
    return (
      <section>
        <p>{this.props.title}</p>
        <img
          src={this.props.imageURL}
          alt={this.props.alt}
        />
        <p>{this.props.description}</p>
      </section>
    )
  }
}

export default Section;
