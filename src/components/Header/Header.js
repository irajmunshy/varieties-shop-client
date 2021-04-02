import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {photo, email, isLoggedIn} = loggedInUser;

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container my-4">
                <div className="w-100 d-flex justify-content-between">
                    <div>
                        <Link className="navbar-brand" to="/home">
                            <h3>VARIETIES SHOP</h3>
                        </Link>
                    </div>
                    <div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link to="/home" className="nav-link">Home</Link>
                                <Link to="/orders" className="nav-link">Orders</Link>
                                <Link to="/admin" className="nav-link">Admin</Link>
                                <Link to="/" className="nav-link">Deals</Link>
                                {(isLoggedIn && email) ? 
                                        <Link to="/userInfo" class="nav-link">{<img style={{width: '30px', height: '30px', borderRadius: '100px'}} src={photo}  alt=""/> || <p id="custom-link">{email.slice(0, -10)}</p>}</Link>
                                    :
                                        <Link to="/login" class="nav-link" id="custom-link">Log in</Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;