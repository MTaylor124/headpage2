import React, { Component } from 'react'
import withStyles from '@material-ui/styles/withStyles'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const style = {
    form: {
        textAlign: 'center'
    }
}
class Login extends Component {
    constructor(props) {
        super (props)

        this.state = {

        }
    }
    render () {
        const { classes } = this.props
        return (
            <Grid container className={classes.form}>
                <Grid item sm/>
                <Grid item sm>
                    <div classname='sitePicPlaceholder'>headpage</div>
                    <div>leeeeeeee</div>
                </Grid>
                <Grid item sm/>
            </Grid>
        )
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(style)(Login)
