import './App.css'
import React from 'react';
import { Homepage, Shop, RegisterLogin } from './pages';
import { Header } from './components'
import { Routes, Route } from 'react-router-dom'
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  constructor(props) {
    super(props)


    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;
  componentDidMount(){
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })

      console.log(user);
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth;
  }
  render(){
      return (
        <div>
          <Header currentUser={this.state.currentUser} />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/login" element={<RegisterLogin />} />
          </Routes>
        </div>
      )
  }
}

export default App
