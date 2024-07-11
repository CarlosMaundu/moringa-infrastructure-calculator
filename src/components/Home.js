import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-intro text-center">
                <h1>Effortlessly Calculate your</h1>
                <h1><span className="home-highlight">Infrastructure Costs</span></h1>
                <p className="home-lead">
                    Our infrastructure pricing calculator simplifies the process of estimating costs for various services.
                    With just a few clicks, you can select the services you need and get an instant estimate of your total expenses.
                </p>
                <Link to="/calculator" className="home-btn mb-5">Get Estimate</Link>
            </div>
            <div className="home-services text-center">
                <h2>Our Services</h2>
                <div className="row mt-4 justify-content-center">
                    <div className="col-md-4">
                        <div className="home-card">
                            <div className="home-card-body">
                                <span className="material-icons home-service-icon">desktop_windows</span>
                                <div className="home-text-content">
                                    <h5 className="home-card-title">Front End Server</h5>
                                    <p className="home-card-text">High-performance servers for front-end applications.</p>
                                    <p className="home-service-feature"><span className="material-icons">flag</span> Scalable and Reliable</p>
                                    <p className="home-service-feature"><span className="material-icons">attach_money</span> Starting at <strong>$100/year</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="home-card">
                            <div className="home-card-body">
                                <span className="material-icons home-service-icon">storage</span>
                                <div className="home-text-content">
                                    <h5 className="home-card-title">Backend Servers</h5>
                                    <p className="home-card-text">Reliable servers for backend integration.</p>
                                    <p className="home-service-feature"><span className="material-icons">flag</span> Secure and Efficient</p>
                                    <p className="home-service-feature"><span className="material-icons">attach_money</span> Starting at <strong>$150/year</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="home-card">
                            <div className="home-card-body">
                                <span className="material-icons home-service-icon">dns</span>
                                <div className="home-text-content">
                                    <h5 className="home-card-title">Database Server</h5>
                                    <p className="home-card-text">Secure and scalable database servers.</p>
                                    <p className="home-service-feature"><span className="material-icons">flag</span> High Availability</p>
                                    <p className="home-service-feature"><span className="material-icons">attach_money</span> Starting at <strong>$120/year</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

