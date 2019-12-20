import React, { Component } from 'react';

class AdoptionPage extends Component {
  state = {
    currentCat: null,
    currentDog: null,
    users: null,
    usersList: null,
    userName: null
  }

  createUserList = () => {
    let usersListUpdate = [];
    let currUser = this.state.users
    while(currUser.next) {
      usersListUpdate.push(currUser.value)
      currUser = currUser.next;
    }
    this.setState({
      usersList: usersListUpdate
    })
    return usersListUpdate;
  }

  componentDidMount() {
    this.createUserList()
    this.setState({
      currentCat: this.props.petsData.firstCat,
      currentDog: this.props.petsData.firstDog,
      users: this.props.petsData.users
    })
    setInterval(this.createUserList, 1000)
  }

  static getDerivedStateFromProps = (props, state) => {
    let usersListUpdate = [];
    if(state.users) {
      let currUser = state.users
      while(currUser.next) {
        usersListUpdate.push(currUser.value)
        currUser = currUser.next;
      }
    }
    
    return {
      currentCat: props.petsData.firstCat,
      currentDog: props.petsData.firstDog,
      users: props.petsData.users,
      usersList: usersListUpdate
    }
  }

  handleJoin = (e) => {
    e.preventDefault();
    let user = e.target.user.value;
    this.setState({
      userName: user
    })
    this.props.joinQueue(user);
  }

  handleAdoptCatButton = (e) => {
    e.preventDefault();
    this.setState({
      userName: null
    })
    this.props.adoptCat();
  }

  handleAdoptDogButton = (e) => {
    e.preventDefault();
    this.setState({
      userName: null
    })
    this.props.adoptDog();
  }

  handleAdoptBothButton = (e) => {
    e.preventDefault();
    this.setState({
      userName: null
    })
    this.props.adoptBoth();
  }

  render() {

    let currentCat = this.state.currentCat ? this.state.currentCat.value : null;
    let currentDog = this.state.currentDog ? this.state.currentDog.value : null
    return (
      <div>
        <h2>CURRENT ADOPTIONS</h2>
        <div>
          <h3>AVAILABLE CAT</h3>
          {!currentCat
          ? <h4>No Cats Available for Adoption</h4>
          : <>
          <img src={this.state.currentCat.value.imageURL} alt={this.state.currentCat.value.imageDescription}/>
          <ul>
          <li>Name: {currentCat.name}</li>
          <li>age:{currentCat.age}</li>
          <li>sex: {currentCat.sex}</li>
          <li>breed: {currentCat.breed}</li>
          <li>story: {currentCat.story}</li>
          </ul>
         
          </>
          }
          
        </div>
        <div>
          <h3>AVAILABLE DOG</h3>
          {!currentDog
          ? <h4>Dogs Available for Adoption</h4>
          : <>
          <img src={this.state.currentDog.value.imageURL} alt={this.state.currentDog.value.imageDescription}/>
          <ul>
          <li>Name: {currentDog.name}</li>
          <li>age:{currentDog.age}</li>
          <li>sex: {currentDog.sex}</li>
          <li>breed: {currentDog.breed}</li>
          <li>story: {currentDog.story}</li>
          </ul>
          
          </>
          }

        </div>
        
        
      
        {this.state.userName ?
        <></> :
        <form onSubmit={(e) => this.handleJoin(e)}>
          <input name='user'></input>
          <button type='submit'>JOIN THE QUEUE</button>
        </form>}

        {this.state.users.value !== this.state.userName ?
            <></>
          : <>
               <button onClick={(e) => this.handleAdoptCatButton(e)}>Adopt Cat</button>
               <button onClick={(e) => this.handleAdoptDogButton(e)}>Adopt Dog</button>
               <button onClick={(e) => this.handleAdoptBothButton(e)}>Adopt Both</button>
            </>
      
        }
        {this.state.usersList && 
          <ol>
            {this.state.usersList.map((value, index) => {
              return <li key={index}>{value}</li>
            })}
          </ol>}
      </div>
    )
  }
}

export default AdoptionPage;