import './App.css'
import React from 'react'
import { Homepage, Shop, RegisterLogin } from './pages'
import { Header } from './components'
import { Routes, Route } from 'react-router-dom'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onSnapshot } from 'firebase/firestore';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null
  componentDidMount() {
    auth.onAuthStateChanged(async (userAuth) => {
      // this.setState({ currentUser: user })
      // createUserProfileDocument(user);

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        const unsub = onSnapshot(userRef, (snapshot) => {
          this.setState({
            currentUser:{
              id: snapshot.id,
              ...snapshot.data()
            }
          }, () => {
            console.log(this.state);
          });
        })
      } else {
        this.setState({currentUser: userAuth});
      }
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth;
  }
  render() {
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
