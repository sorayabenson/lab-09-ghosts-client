import React, { Component } from 'react';
import GhostItem from './GhostItem.js';

export default class GhostsWrapper extends Component {
    render() {

        const ghostsWrapper = this.props.ghosts.map(
            ghost => <GhostItem
                    key={ghost.name}
                    ghost={ghost} />
          )

        return (
            <ul>
                {ghostsWrapper}
            </ul>
        )
    }
}