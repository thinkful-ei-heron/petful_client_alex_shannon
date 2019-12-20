import React, { Component } from 'react';

class PetsPage extends Component {
  state = {
    firstCat: null,
    firsDog: null,
    currentCat: null,
    currentDog: null
  }

  handleNextDog = () => {
    if(this.state.currentDog.next) {
      this.setState({
        currentDog: this.state.currentDog.next.value
      })
    } else {
      this.setState({
        currentDog: this.state.firstDog
      })
    }
  }

  handleNextCat = () => {
    if(this.state.currentCat.next) {
      this.setState({
        currentCat: this.state.currentCat.next
      })
    } else {
      this.setState({
        currentCat: this.state.firstCat
      })
    }
  }  

  componentDidMount() {
    console.log(this.props.petsData.firstCat);
    this.setState({
      firstCat: this.props.petsData.firstCat.next,
      firsDog: this.props.petsData.firstDog.next,
      currentCat: this.props.petsData.firstCat.next,
      currentDog: this.props.petsData.firstDog.next
    })
  }

  render() {
    return (
      <div>
        <h2>THESE ANIMALS WILL BE AVAILABLE FOR ADOPTION</h2>
        <div id='adoptable-cat'>
          <h3>CATS</h3>
          {!this.state.currentCat 
          ? <h4>No Cats Available</h4>  
          : <>
              <img src={this.state.currentCat.value.imageURL} alt={this.state.currentCat.value.imageDescription} />
              <span id='cat-name'>{this.state.currentCat.value.name}</span>
            </>}
          <button onClick={e =>{
            e.preventDefault()
            this.handleNextCat()
          }}>NEXT CAT</button>
        </div>
        
        <h3>DOGS</h3>
        {!this.state.currentDog 
          ? <h4>No Dogs Available</h4>  
          : <>
              <img src={this.state.currentDog.value.imageURL} alt={this.state.currentDog.value.imageDescription} />
              <span id='dog-name'>{this.state.currentDog.value.name}</span>
            </>}
          <button onClick={e =>{
            e.preventDefault()
            this.handleNextDog()
          }}>NEXT DOG</button>
      </div>
    )
  }
}

export default PetsPage;