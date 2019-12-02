import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import Thought from './../components/Thought'

export default class Home extends Component {
    state = {
        thoughts: null
    }
    componentDidMount() {
        axios.get('/thoughts')
            .then(res => {
                this.setState({
                    thoughts: res.data
                })
            })
            .catch(err => {
                console.error(err)
            })
    }
    render () {
        let recentThoughtsMarkup = this.state.thoughts ? (
            this.state.thoughts.map(thought => {
                return <Thought
                    thought={thought}
                    key={thought.thoughtId}
                    className='thoughtstyle'>
                    {thought.body}
                    <br/>
                </Thought>
            })
        ) : <div>loading...</div>
        return (
            <Grid container spacing={4}>
                <Grid item sm={8} xs={12}>
                    <div className='homecontent'>
                        {recentThoughtsMarkup}
                    </div>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <div className='homeprofile'>profile</div>
                </Grid>
            </Grid>
        )
    }
}
