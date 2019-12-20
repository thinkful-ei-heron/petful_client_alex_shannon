import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class InfoPage extends Component {
  render() {
    return (
      <div>
        <h2>THIS IS INFORMATION</h2>
        <p>INFORMATION</p>
        <Link to='/Adoptions'><button>JOIN THE LINE TO ADOPT</button></Link>
      </div>
    )
  }
}

export default InfoPage;