import React, { Component } from 'react';

class AdoptionPage extends Component {
  state = {
    currentCat: null,
    currentDog: null
  }

  componentDidMount() {
    this.setState({
      currentCat: this.props.petsData.firstCat,
      currentDog: this.props.petsData.firstDog
    })
    console.log(this.state.currentCat);
  }

  static getDerivedStateFromProps = (props, state) => {
    return {
      currentCat: props.petsData.firstCat,
      currentDog: props.petsData.firstDog
    }
  }

  handleAdoptCatButton = (e) => {
    e.preventDefault();
    this.props.adoptCat();
  }

  handleAdoptDogButton = (e) => {
    e.preventDefault();
    this.props.adoptDog();
  }

  handleAdoptBothButton = (e) => {
    e.preventDefault();
    this.props.adoptBoth();
  }

  render() {
    console.log(this.state.currentCat);
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
          <button onClick={(e) => this.handleAdoptCatButton(e)}>Adopt Cat</button>
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
          <button onClick={(e) => this.handleAdoptDogButton(e)}>Adopt Dog</button>
          </>
          }

        </div>
        <button onClick={(e) => this.handleAdoptBothButton(e)}>Adopt Both</button>
        <button>JOIN THE QUEUE</button>
      </div>
    )
  }
}

export default AdoptionPage;