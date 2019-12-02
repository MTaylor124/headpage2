import React, { Component } from 'react'
import withStyles from '@material-ui/styles/withStyles'
import Card from '@material-ui/core/Card'
// import CardActionArea from '@material-ui/core/CardActionArea'
// import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
// const Link = require("react-router-dom").Link
import { Link } from 'react-router-dom'
const styles = {
    card: {
        display: 'flex',
        marginBottom: '0.5rem'
    },
    image: {
        minWidth: '20%'
        // padding: '50px'
    },
    content: {
        padding: '1rem',
        objectFit: 'cover'
    }
}
class Thought extends Component {
    render () {
        const { classes, thought : {
                // thoughtId,
                // likeCount,
                // commentCount
                body,
                createdAt,
                userImage,
                username,
            } } = this.props
        return (
            <Card className={classes.card}>
                <CardMedia
                image={userImage}
                title="user image"
                className={classes.image}
                />
                <CardContent className={classes.content}>
                    <Typography variant="h5"
                    component={Link}
                    to={`/user/${username}`}
                    color="primary">{username}</Typography>
                    <Typography variant="body2" color="textSecondary">{createdAt}</Typography>
                    <Typography variant="body1">{body}</Typography>
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(Thought)
