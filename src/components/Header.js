import React from 'react';
import './Header.css';
import { NavLink, withRouter } from 'react-router-dom';

function Header() {
        return (
            <nav>
                <NavLink to="/" exact>
                    home
                </NavLink>

                <h1>personal ghosts</h1>

                <NavLink to="/create" exact>
                    create
                </NavLink>
            </nav>
        );
}

export default withRouter(Header);
