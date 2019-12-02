import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'
import Navbar from './components/Navbar'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'


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
function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <div className="App">
                <Router>
                    <Navbar />
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/signup" component={Signup} />
                        </Switch>
                    </div>
                </Router>
            </div>
        </MuiThemeProvider>
    );
}

export default App;
