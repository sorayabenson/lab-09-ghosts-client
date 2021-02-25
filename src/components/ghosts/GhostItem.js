import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class GhostItem extends Component {

    render() {
        return (
            <Link 
            to={`/detail/${this.props.ghost.id}`}
            className="li">
                <h3>{this.props.ghost.name}</h3>

                <img alt={this.props.ghost.name} src={this.props.ghost.img} />

                <p>{this.props.ghost.description}</p>

                <h6>price: {this.props.ghost.price} {this.props.ghost.price_currency}</h6>

                <h6>
                    trustworthy: 
                    {this.props.ghost.trustworthy
                    ? ' yes'
                    : ' no'}</h6>

                <h6>category: {this.props.ghost.category_id}</h6>

            </Link>
        )
    }
}
