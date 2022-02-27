// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onClickGenerate = () => {
    const randomNo = Math.floor(Math.random() * 101)
    this.setState({count: randomNo})
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <div className="container">
          <h1>Random Number</h1>
          <p>Generate a random no in the range of 0 to 100</p>
          <button
            type="button"
            className="button"
            onClick={this.onClickGenerate}
          >
            Generate
          </button>
          <h2>{count}</h2>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
