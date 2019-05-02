import React from 'react';
import { Link} from 'react-router-dom';

const  Header = () => {
       
    return(
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">Home</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/home">Home</Link></li>
                </ul>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/about">About</Link></li>
                </ul>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/todos">Todos</Link></li>
                </ul>
                
            </div>
        </nav>
        
    );
};

export default Header;

