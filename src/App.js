import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import AdoptionPage from './AdoptionPage/AdoptionPage';
import InfoPage from './InfoPage/InfoPage';
import SuccessPage from './SuccessPage/SuccessPage';
import PetsPage from './PetsPage/PetsPage';

class App extends Component {
  state = {
    firstDog: {},
    firstCat: {}
  }

  componentDidMount() {
    let url = 'http://localhost:8000/api/'
    fetch(url + 'cats', {
      method: 'GET',
      headers: {'content-type': 'application/json'}
    })
    .then(res => {
      if(!res.ok){
        throw new Error(res.status)
      }
      return res.json()
    })
    .then(data => {
      this.setState({
        firstCat: data
      })
    })
    fetch(url + 'dogs', {
      method: 'GET',
      headers: {'content-type': 'application/json'}
    })
    .then(res => {
      if(!res.ok){
        throw new Error(res.status)
      }
      return res.json()
    })
    .then(data => {
      this.setState({
        firstDog: data
      })
    })
  }
  render() {
    return (
      <div>
        <header>
          <nav className='nav-bar'>
            <Link to='/Success'><button>Success</button></Link>
            <Link to='Pets'><button>Pets</button></Link>
            <Link to='/Adoptions'><button>Adoptions</button></Link>
          </nav>
          <Link to='/'><button><h1>PETFUL: FIFO ADOPTION</h1></button></Link>
        </header>
        
        
        <Route exact path='/' component={InfoPage} />
        <Route path='/Adoptions' component={AdoptionPage} />
        <Route path='/Pets' render={() => {
          return <PetsPage  petsData = {this.state} />
        }} />
        <Route path='/Success' component={SuccessPage} />
        
      </div>
    )
  }
}

export default App;
