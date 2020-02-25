import React, { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import HomePage from './pages/homepage'
import ShopPage from './pages/shop/Index'
import SignInAndSignUpPage from './pages/login-register'
import Header from './components/header'
import { auth, createUserProfileDocument } from './utils/firebase'
import './App.css'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/action/user'

import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/selector/user'

class App extends Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            // console.log('currentUser', this.state)
          })
        })
      }
      setCurrentUser( userAuth )
    })
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  

  render() {
  return (
    <div className="App">
    {/* <Header currentUser={this.state.currentUser} /> */}
    <Header/>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/shop' component={ShopPage} />
      <Route 
        exact
        path='/signin'
        render={() => 
          this.props.currentUser ? (
            <Redirect to='/' />
          ) : (
            <SignInAndSignUpPage />
          )
        }
      />
    </Switch>
    </div>
    );
  }
}

const mapStateProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispathToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateProps, mapDispathToProps)(App)