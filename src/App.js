import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import AdoptionPage from './AdoptionPage/AdoptionPage';
import InfoPage from './InfoPage/InfoPage';
import SuccessPage from './SuccessPage/SuccessPage';
import PetsPage from './PetsPage/PetsPage';

class App extends Component {
  state = {
    firstDog: {},
    firstCat: {},
    users: []
  }

  setUsers = () => {
    let url = 'http://localhost:8000/api/'
    fetch(url + 'users', {
      method: 'GET',
      headers: { 'content-type': 'application/json' }
    })
      .then(res => {
        if(!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(data => {
        this.setState({
          users: data
        })
      })

  }

  setFirstCat = () => {
    let url = 'http://localhost:8000/api/'
    fetch(url + 'cats', {
      method: 'GET',
      headers: { 'content-type': 'application/json' }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(data => {
        this.setState({
          firstCat: data
        })
      })
  }

  setFirstDog = () => {
    let url = 'http://localhost:8000/api/'
    fetch(url + 'dogs', {
      method: 'GET',
      headers: { 'content-type': 'application/json' }
    })
      .then(res => {
        if (!res.ok) {
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

  adoptCat = () => {
    let url = 'http://localhost:8000/api/'
    fetch(url + 'cats', {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' }
  })
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status)
      }
      return
    })
    .then(() => {
      this.setState({
        firstCat: this.state.firstCat.next ? this.state.firstCat.next : null,
        users: this.state.users.next ? this.state.users.next : null
      })
    })
  }

  adoptDog = () => {
    let url = 'http://localhost:8000/api/'
    fetch(url + 'dogs', {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' }
  })
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status)
      }
      return
    })
    .then(() => {
      this.setState({
        firstDog: this.state.firstDog.next ? this.state.firstDog.next : null,
        users: this.state.users.next ? this.state.users.next : null
      })
    })
  }

  joinQueue = (user) => {
    let url = 'http://localhost:8000/api/'
    let input = { user }
    fetch(url + 'users', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(input)
  })
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status)
      }
      return res.json()
    })
    .then(res => {
      console.log(res);
      this.setState({
        users: res
      })
    })
  }

  adoptBoth = () => {
    let url = 'http://localhost:8000/api/'
    fetch(url + 'users', {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' }
  })
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status)
      }
      return
    })
    .then(() => {
      this.setState({
        firstCat: this.state.firstCat.next ? this.state.firstCat.next : null,
        firstDog: this.state.firstDog.next ? this.state.firstDog.next : null,
        users: this.state.users.next ? this.state.users.next : null
      })
    })
  }

  componentDidMount() {
    this.setFirstCat();
    this.setFirstDog();
    this.setUsers();

    setInterval(this.setUsers, 5000);
    setInterval(this.setFirstCat, 5000);
    setInterval(this.setFirstDog, 5000);
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
        <Route path='/Adoptions' render = {() => {
        return <AdoptionPage 
          petsData={this.state} 
          adoptCat={this.adoptCat}
          adoptDog={this.adoptDog}
          adoptBoth= {this.adoptBoth}
          joinQueue= {this.joinQueue}
          /> 
        }}/>
        <Route path='/Pets' render={() => {
          return <PetsPage petsData={this.state} />
        }} />
        <Route path='/Success' component={SuccessPage} />

      </div>
    )
  }
}

export default App;
