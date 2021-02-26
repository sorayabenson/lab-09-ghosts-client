import React, { Component } from 'react';
import { deleteGhost, getCategories, getCategoryId, getGhost, updateGhost, handleCategoryName, handleTrustworthyDisplay } from './apiUtils';
import './Detail.css';

export default class Detail extends Component {
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

    componentDidMount = async () => {
        const ghost = await getGhost(this.props.match.params.id);

        const categories = await getCategories();

        const category_id = getCategoryId(ghost, categories);

        this.setState({
            name: ghost.name,
            img: ghost.img,
            description: ghost.description,
            category_id: category_id,
            price: ghost.price,
            price_currency: ghost.price_currency,
            trustworthy: ghost.trustworthy,
            owner_id: ghost.owner_id,
        })

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

    handleCategory = async (e) => {
        await this.setState({ category_id: Number(e.target.value) });
    }

    handlePrice = (e) => {
        this.setState({ price: Number(e.target.value) });
    }

    handleCurrency = (e) => {
        this.setState({ price_currency: e.target.value });
    }

    handleTrust = async (e) => {
        await this.setState({ trustworthy: e.target.value });
        console.log(this.state.trustworthy)
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await updateGhost(this.props.match.params.id, this.state);

        this.props.history.push('/ghosts');

        window.location.pathname = '/';
    }
    
    handleDelete = async (e) => {
        e.preventDefault();

        await deleteGhost(this.props.match.params.id);

        this.props.history.push('/ghosts');

        window.location.pathname = '/';
    }


    render() {

        // let trust = handleTrustworthyDisplay(this.state.trustworthy);

        let category = handleCategoryName(this.state.category_id);

        return (
            <div className="main">

                <h3>update a ghost</h3>
                
                <div className="formWrapper">

                    <div className="ghostWrapper">
                        <h3>{this.state.name}</h3>

                        <img alt={this.state.name} src={this.state.img} />

                        <p>{this.state.description}</p>

                        <h6>price: {this.state.price} {this.state.price_currency}</h6>

                        <h6>
                            trustworthy: {this.state.trustworthy}
                        </h6>

                        <h6>category: {category}</h6>

                    </div>
                
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" 
                        placeholder="ghost name" 
                        className="nameInput"
                        value={this.state.name} 
                        onChange={this.handleName} />
                        <input type="url" 
                        placeholder="image url" 
                        className="urlInput" 
                        value={this.state.img} 
                        onChange={this.handleImg} />

                        <textarea 
                        wrap="soft"
                        placeholder="ghost description" 
                        className="descriptionInput"
                        value={this.state.description} 
                        onChange={this.handleDescription} />

                        <div className="priceWrapper">
                            <input type="number" 
                            placeholder="price" 
                            className="priceInput"
                            value={this.state.price} 
                            onChange={this.handlePrice} />
                            <input type="text" 
                            placeholder="ghost currency" 
                            className="currencyInput"
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
                            onChange={this.handleTrust}
                            // checked={true === this.state.trustworthy}
                            />
                            <label htmlFor="true">yes</label>
                            
                            <input
                            type="radio" 
                            value="false" 
                            id="false"
                            name="trustworthy"
                            onChange={this.handleTrust}
                            // checked={false === this.state.trustworthy}
                            />
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
                
                </div>

                <button
                onClick={this.handleSubmit}>update!</button>

                <button
                onClick={this.handleDelete}
                className="deleteButton">deleeeeeeeeete :o</button>
            </div>
        )
    }
}
