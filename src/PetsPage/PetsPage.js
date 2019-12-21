import React, { Component } from 'react';
import './PetsPage.css';

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
        currentDog: this.state.currentDog.next
      })
    } else {
      this.setState({
        currentDog: this.state.firstDog
      })
    }
  }
//handleNextCat was not working- it appears that since we have static props set it is 
// not allowing us to setState within our function. 
  handleNextCat = () => {
    if(this.state.currentCat.next) {
      let nextCat= this.state.currentCat.next;
      this.setState({
        currentCat: nextCat
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

  static getDerivedStateFromProps = (props, state) => {
    return {
      firstCat: props.petsData.firstCat.next,
      firsDog: props.petsData.firstDog.next,
      currentCat: props.petsData.firstCat.next,
      currentDog: props.petsData.firstDog.next
    }
  }

  render() {
    return (
    <>
    <h2 className='pets-page-header'>AVAILABLE SOON</h2>
      <div className='pets-page'>
        <div id='adoptable-cat' className='next-animals'>
          <h3>CATS</h3>
          {!this.state.currentCat 
          ? <h4>No Cats Available</h4>  
          : <>
              <img src={this.state.currentCat.value.imageURL} alt={this.state.currentCat.value.imageDescription} />
              <div className='animal-names'>
                <span id='cat-name'>{this.state.currentCat.value.name}</span>
              </div>
            </>}
          <button className='next-button' onClick={e =>{
            e.preventDefault()
            this.handleNextCat()
          }}>NEXT CAT</button>
        </div>
        
        <div className='next-animals'>
        <h3>DOGS</h3>
        {!this.state.currentDog 
          ? <h4>No Dogs Available</h4>  
          : <>
              <img src={this.state.currentDog.value.imageURL} alt={this.state.currentDog.value.imageDescription} />
              <div className='animal-names'>
              <span id='dog-name'>{this.state.currentDog.value.name}</span>
              </div>
            </>}
          <button className='next-button' onClick={e =>{
            e.preventDefault()
            this.handleNextDog()
          }}>NEXT DOG</button>
        </div>
      </div>
      </>
    )
  }
}

export default PetsPage;