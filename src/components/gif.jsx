import React, { Component } from 'react';

class Gif extends Component {
  handleClick = (event) => {
    this.props.setSelectedGif(event.target.src.split('/')[4]);
  }

  render() {
    const src = `https://media1.giphy.com/media/${this.props.id}/200h.gif`
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick}/>
    );
  }
}

export default Gif;
