import React, { Component } from 'react';
import './Home.css';
import GhostsWrapper from './ghosts/GhostsWrapper.js';
import { getGhosts } from './apiUtils.js';

export default class Home extends Component {
    state = {
        ghosts: [],
    }

    componentDidMount = async () => {
        const data = await getGhosts();

        this.setState({
            ghosts: data,
        })
    }

    render() {
        return (
            <div className="main">
                <GhostsWrapper ghosts={this.state.ghosts}/>
            </div>
        )
    }
}
