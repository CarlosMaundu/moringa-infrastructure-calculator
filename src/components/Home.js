import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';

const Home = () => {
    return (
        <div className="container text-center mt-5">
            <h1>Effortlessly Calculate your <span className="text-primary">Infrastructure Costs</span></h1>
            <p className="lead">
                Our infrastructure pricing calculator simplifies the process of estimating costs for various services.
                With just a few clicks, you can select the services you need and get an instant estimate of your total expenses.
            </p>
            <Link to="/calculator" className="btn btn-primary mb-5">Get Estimate</Link>
            <h2>Our Services</h2>
            <div className="row mt-4">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Front End Server</h5>
                            <p className="card-text">High-performance servers for front-end applications.</p>
                            <p>Scalable and Reliable</p>
                            <p>Starting at <strong>$100/month</strong></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Backend Servers</h5>
                            <p className="card-text">Reliable servers for backend integration.</p>
                            <p>Secure and Efficient</p>
                            <p>Starting at <strong>$150/month</strong></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Database Server</h5>
                            <p className="card-text">Secure and scalable database servers.</p>
                            <p>High Availability</p>
                            <p>Starting at <strong>$120/month</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
