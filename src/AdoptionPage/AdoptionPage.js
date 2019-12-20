import React, { Component } from 'react';

class AdoptionPage extends Component {
  render() {
    return (
      <div>
        <h2>CURRENT ADOPTIONS</h2>
        <div>
          <h3>AVAILABLE CAT</h3>
          <img></img>
          <p>CAT DESCRIPTION</p>
          <button>Adopt Cat</button>
        </div>
        <div>
          <h3>AVAILABLE DOG</h3>
          <img></img>
          <p>DOG DESCRIPTION</p>
          <button>Adopt Dog</button>
        </div>
        <button>JOIN THE QUEUE</button>
      </div>
    )
  }
}

export default AdoptionPage;