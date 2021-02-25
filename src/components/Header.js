import React from 'react';
import './Header.css';
import { NavLink, withRouter } from 'react-router-dom';

function Header() {
        return (
            <nav>
                <NavLink className="link" to="/" exact>
                    home
                </NavLink>

                <h1>personal ghosts</h1>

                <NavLink className="link" to="/create" exact>
                    create
                </NavLink>
            </nav>
        );
}

export default withRouter(Header);
