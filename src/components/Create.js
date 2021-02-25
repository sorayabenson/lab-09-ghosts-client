import React, { Component } from 'react';
import './Create.css';
import { makeGhost } from './apiUtils.js';

export default class Create extends Component {
    state ={
        name: '',
        img: '',
        description: '',
        category_id: 1,
        price: 0,
        price_currency: '',
        trustworthy: true,
        owner_id: 1,
    }

    handleName = (e) => {
        this.setState({ name: e.target.value });
    }
    

    handleImg = (e) => {
        this.setState({ img: e.target.value });
    }

    handleDescription = (e) => {
        this.setState({ description: e.target.value });
    }

    handleCategory = (e) => {
        this.setState({ category_id: Number(e.target.value) });
    }

    handlePrice = (e) => {
        this.setState({ price: Number(e.target.value) });
    }

    handleCurrency = (e) => {
        this.setState({ price_currency: e.target.value });
    }

    handleTrust = (e) => {
        this.setState({ trustworthy: e.target.value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await makeGhost(this.state);

        this.props.history.push('/ghosts');
        console.log(this.state);
        window.location.pathname = '/';
    }

    render() {
        return (
            <div className="main">
                <h3>make a new ghost</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="ghost name" className="nameInput"
                    value={this.state.name} 
                    onChange={this.handleName} />
                    <input type="url" placeholder="image url" className="urlInput" 
                    value={this.state.img} 
                    onChange={this.handleImg} />

                    <textarea 
                    wrap="soft"
                    placeholder="ghost description" 
                    className="descriptionInput"
                    value={this.state.description} 
                    onChange={this.handleDescription} />

                    <div className="priceWrapper">
                        <input type="number" placeholder="price" className="priceInput"
                        value={this.state.price} 
                        onChange={this.handlePrice} />
                        <input type="text" placeholder="ghost currency" className="currencyInput"
                        value={this.state.price_currency} 
                        onChange={this.handleCurrency} />
                    </div>

                    <div className="trustworthyWrapper">
                        <h6>trustworthy:</h6>

                        <input 
                        type="radio" 
                        value="true" 
                        id="true"
                        name="trustworthy"
                        onChange={this.handleTrust}/>
                        <label htmlFor="true">yes</label>
                        
                        <input
                        type="radio" 
                        value="false" 
                        id="false"
                        name="trustworthy"
                        onChange={this.handleTrust}/>
                        <label htmlFor="false">no</label>

                    </div>

                    <div className="categoryWrapper">
                        <h6>category:</h6>
                        <select
                        value={this.state.category_id} 
                        onChange={this.handleCategory}>
                            <option value="1">skill</option>
                            <option value="2">food</option>
                            <option value="3">care</option>
                        </select>
                    </div>

                </form>

                <button
                onClick={this.handleSubmit}>create!</button>
            </div>
        )
    }
}
