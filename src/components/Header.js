import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


class Header extends React.Component {



    render() {
        return (
            <div className="header-container">
                <button><Link to= "/">Home</Link></button>
                <button><Link to="/products/">Products</Link></button>
            </div>
        )
    }
}

export default Header;