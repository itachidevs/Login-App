import {Component} from 'react'

import './index.css'

import Message from '../Message'

import Login from '../Login'

import Logout from '../Logout'

class Home extends Component {
  state = {isClicked: false}

  Onchange = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked} = this.state
    const pElemnt = isClicked ? <Message message="Welcome User" /> : <Message />
    const textContnet = isClicked ? <Logout /> : <Login />
    return (
      <div className="container">
        {pElemnt}
        <button className="button" type="button" onClick={this.Onchange}>
          {textContnet}
        </button>
      </div>
    )
  }
}
export default Home
