import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'
import Navbar from './components/Navbar'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import jwtDecode from 'jwt-decode'
import AuthRoute from './components/AuthRoute'
const theme = createMuiTheme({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    palette: {
        primary: {
            main: '#ffcd38',
            light: '##ffd95b',
            dark: 'c77800'
            // contrastTest:
        },
        secondary: {
            main: '#dd2c00',
            light: 'ff6434',
            dark: 'a30000'
            // contrastTest:
        }
    }
})
let authenticated

const token = localStorage.FBIdToken
if (token) {
    const decodedToken = jwtDecode(token)
    console.log(decodedToken)
    if (decodedToken.exp * 1000 < Date.now()) {
        window.location.href = '/login'
        authenticated = false
    } else {
        authenticated = true
    }
}
export default class App extends React.Component {
    state = {
        loggedIn: false
    }
    componentDidMount () {
        if (token) {
            this.setState({ loggedIn: true})
        }
    }
    render() {
        let welcomeBack
        if (this.state.loggedIn) {
            welcomeBack = (
                <div>welcome back!</div>
            )
        } else {
            welcomeBack = (
                <div>you're not logged in</div>
            )
        }
        return (
            <MuiThemeProvider theme={theme}>
                <div className="App">
                    <Router>
                        <Navbar />
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <AuthRoute exact path="/login" component={Login} authenticated={authenticated}/>
                                <AuthRoute exact path="/signup" component={Signup} authenticated={authenticated}/>
                            </Switch>
                        </div>
                        {welcomeBack}
                    </Router>
                </div>
            </MuiThemeProvider>
        );
    }
}
