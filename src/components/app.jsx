import React, { Component } from 'react';
import giphy from 'giphy-api'

import SearchBar from './search_bar.jsx'
import Gif from './gif.jsx'
import GifList from './gif_list.jsx'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "Yr5O0H5CKqz8yVLOx8"
    }

    this.search('disney')
  }

  search = (query) => {
    giphy('iBZZUuDbfEmVQeiOXiSQCefnbdw7CX2i').search({
      q: query,
      rating: 'g'
    }, (err,res) => {
      this.setState({
        gifs: res.data
      })
    });
  }

  setSelectedGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    const gifs = [
      {id: "Yr5O0H5CKqz8yVLOx8"},
      {id: "LmxowqCIxw1lB65nXI"}
    ];
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id= {this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList setSelectedGif={this.setSelectedGif} gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
