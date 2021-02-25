import React, { Component } from 'react';
import './Create.css';

export default class Create extends Component {
    render() {
        return (
            <div className="main">
                <h3>make a new ghost</h3>
                <form>
                    <input type="text" placeholder="ghost name" className="nameInput" />
                    <input type="url" placeholder="image url" className="urlInput" />

                    <textarea 
                    wrap="soft"
                    placeholder="ghost description" 
                    className="descriptionInput" />

                    <div className="priceWrapper">
                        <input type="number" placeholder="price" className="priceInput" />
                        <input type="text" placeholder="ghost currency" className="currencyInput" />
                    </div>

                    <div className="trustworthyWrapper">
                        <h6>trustworthy:</h6>

                        <input 
                        type="radio" 
                        value="true" 
                        id="true"
                        name="trustworthy"/>
                        <label for="true">yes</label>
                        
                        <input
                        type="radio" 
                        value="false" 
                        id="false"
                        name="trustworthy"/>
                        <label for="false">no</label>

                    </div>

                    <div className="categoryWrapper">
                        <h6>category:</h6>
                        <select>
                            <option value="1">skill</option>
                            <option value="2">food</option>
                            <option value="3">care</option>
                        </select>
                    </div>

                </form>

                <button>create!</button>
            </div>
        )
    }
}
