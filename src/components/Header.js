import React from 'react';
import { Link } from 'react-router-dom';
import '../Header.css';

const Header = () => {
    return (
        <header className="bg-dark text-white py-3">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    {/* <imgx
                        src="../../public/9483173.png"
                        alt="Logo"
                        className="mr-2"
                        style={{ width: '50px' }}
                    /> */}
                    <h1 className="h4 m-0">Infrastructure Calculator</h1>
                </div>
                <Link to="/calculator" className="btn btn-primary">Try it out</Link>
            </div>
        </header>
    );
};

export default Header;
