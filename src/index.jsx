import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

class App extends Component {
  constructor() {
    super()
    this.state = {
      greetingMessage: 'Your name?',
      user: ''
    }
  }

  onChange = (e) => {
    this.setState({user: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.user !== '') {
      this.setState({
        greetingMessage: 'Hello, '+this.state.user+'!',
        user: ''
      })
    } else {
      this.setState({greetingMessage: 'No name?'})
    }
  }

  render() {
    return (
      <div className='main'>
        <h1>{this.state.greetingMessage}</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} placeholder="your name here" value={this.state.user}/>
          <button>SEND</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))