import React, { Component } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

// const Link = require("react-router-dom").Link
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render () {
        return (
            <AppBar>
                <Toolbar className="toolbar-style">
                    <Button color="inherit" component={Link} to='/login'>Login</Button>
                    <Button color="inherit" component={Link} to='/'>Home</Button>
                    <Button color="inherit" component={Link} to='/signup'>Signup</Button>
                </Toolbar>
            </AppBar>
        )
    }
}
