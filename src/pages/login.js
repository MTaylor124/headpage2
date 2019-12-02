import React, { Component } from 'react'
import withStyles from '@material-ui/styles/withStyles'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'

import axios from 'axios'

const style = {
    form: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '50%',
        margin: 'auto'
    },
    pageTitle: {
        color: 'gold',
        marginTop: '10px',
        fontSize: '2rem'
    },
    textField: {
        margin: '7px',
        width: '65%',
        textAlign: 'center'
    },
    button: {
        marginTop: '20px',
        marginBottom: '13px',
        backgroundColor: 'gold',
        color: 'black',
        maxWidth: '40%'
    },
    customError: {
        color: 'red',
        fontSize: '0.7rem',
        marginTop: '10px'
    },
    redirectToSignup: {
        color: 'gold',
        textDecoration: 'none',
        '&:hover': {
             textDecoration: 'underline'
        },
    },
    columnForm: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
}


class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            loading: false,
            errors: {}
        }
    }
     handleSubmit = (event) => {
         event.preventDefault()
         this.setState({ loading: true })
         const userData = {
             email: this.state.email,
             password: this.state.password
         }
         axios.post('/login', userData)
            .then(res => {
                localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`)
                this.setState({ loading: false })
                this.props.history.push('/')
            })
            .catch(err => {
                this.setState({
                    errors: err.response.data,
                    loading: false
                })
            })
    }
     handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render () {
        const { classes } = this.props
        const { errors, loading } = this.state
        return (
            <Grid container className={classes.form}>
                <Grid item sm>
                    <div className='sitePicPlaceholder'>headpage pic</div>
                    <Typography variant='h3' className={classes.pageTitle}>LOGIN</Typography>
                    <form noValidate onSubmit={this.handleSubmit} className={classes.columnForm}>
                        <TextField
                            name="email"
                            type="email"
                            label="Email"
                            className={classes.textField} value={this.state.email}
                            onChange={this.handleChange}
                            helperText={errors.email}
                            error={errors.email ? true : false}
                            />
                        <TextField
                            name="password"
                            type="password"
                            label="Password"
                            className={classes.textField} value={this.state.password}
                            onChange={this.handleChange}
                            helperText={errors.password}
                            error={errors.password ? true : false}
                            />
                            {errors.general && (
                                <Typography
                                    variant='body2'
                                    className={classes.customError}>
                                        {errors.general}
                                </Typography>
                            )}
                            { loading ? <CircularProgress /> : <Button
                                type='submit'
                                variant='contained'
                                color='secondary'
                                className={classes.button}
                                > Login </Button>
                            }
                    </form>
                    <div>Don't have an account? Sign up <Link to='/signup' className={classes.redirectToSignup}>here!</Link></div>
                </Grid>
            </Grid>
        )
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(style)(Login)
