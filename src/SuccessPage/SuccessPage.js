import React, { Component } from 'react';
import SuccessInfo from './SuccessInfo';

class SuccessPage extends Component {
  state = {
    successes: null,
  }

  setSuccesses = () => {
    this.setState({
      successes: this.props.successes
    })
  }

  componentDidMount() {
    this.setSuccesses();
  }

  static getDerivedStateFromProps = (props, state) => {
    return {
      successes: props.successes
    }
  }

  renderSuccesses = () => {
    return this.state.successes.map((animal, index) => {
      return <SuccessInfo key = {index} animal={animal}/>
    })
  }

  render() {
    return (
      <div>
        <h2>THESE ANIMALS WERE ADOPTED</h2>
        {this.state.successes && this.renderSuccesses()}
      </div>
    )
  }
}

export default SuccessPage;