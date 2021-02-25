import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class GhostItem extends Component {
    render() {
        return (
            <Link 
            to={`${this.props.ghost.id}`}
            className="li">
                <img alt={this.props.ghost.name} src={this.props.ghost.img} />
            </Link>
        )
    }
}
