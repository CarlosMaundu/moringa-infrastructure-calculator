import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../PricingCalculator.css';

const PricingCalculator = () => {
  const [selectedServices, setSelectedServices] = useState({
    frontend: null,
    backend: null,
    database: null
  });

  const handleSelect = (service, plan) => {
    setSelectedServices((prevServices) => ({
      ...prevServices,
      [service]: plan
    }));
  };

  const calculateTotal = () => {
    const costs = {
      frontend: { basic: 100, advanced: 200 },
      backend: { basic: 150, advanced: 300 },
      database: { basic: 120, advanced: 240 }
    };

    return Object.entries(selectedServices).reduce(
      (total, [service, plan]) => total + (costs[service][plan] || 0),
      0
    );
  };

  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <div className="homepage-link" onClick={() => navigate('/')}>
        <span className="material-icons">arrow_back_ios</span>
        <span className="homepage-text">Homepage</span>
      </div>
      <h1 className="text-center mb-4">WELCOME TO OUR SERVICE CALCULATOR!</h1>
      <h2 className="text-center mb-4">Select your service plan</h2>
      <div className="row">
        {['frontend', 'backend', 'database'].map((service) => (
          <div key={service} className="col-md-4">
            <div className="card mb-4">
              <div className="card-header text-center">
                {service.charAt(0).toUpperCase() + service.slice(1)} Server
              </div>
              <div className="card-body">
                {['basic', 'advanced'].map((plan) => (
                  <div
                    key={plan}
                    className={`card mb-2 ${selectedServices[service] === plan ? 'selected' : ''}`}
                    onClick={() => handleSelect(service, plan)}
                  >
                    <div className="card-body">
                      <h5 className="card-title">
                        <span className="material-icons">
                          {selectedServices[service] === plan ? 'radio_button_checked' : 'radio_button_unchecked'}
                        </span>
                        {plan.charAt(0).toUpperCase() + plan.slice(1)}
                        <div className="price">
                          <span className="amount">
                            ${{
                              frontend: { basic: 100, advanced: 200 },
                              backend: { basic: 150, advanced: 300 },
                              database: { basic: 120, advanced: 240 }
                            }[service][plan]}
                          </span>
                          <span className="per-year">/year</span>
                        </div>
                      </h5>
                      <p><span className="material-icons">check</span>OS: Enterprise Linux</p>
                      <p><span className="material-icons">check</span>vCPU: {plan === 'basic' ? '2 (4 cores each)' : '4 (8 cores each)'}</p>
                      <p><span className="material-icons">check</span>RAM: {plan === 'basic' ? '16GB DDR3' : '32GB DDR3'}</p>
                      <p><span className="material-icons">check</span>Network: 1GB Ethernet</p>
                      <p><span className="material-icons">check</span>Storage: {plan === 'basic' ? '500GB SSD' : '1TB SSD'}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <h2>Cost Summary</h2>
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Service</th>
              <th>Package</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(selectedServices).map(([service, plan], index) => (
              plan && (
                <tr key={service}>
                  <td>{index + 1}</td>
                  <td>{service.charAt(0).toUpperCase() + service.slice(1)} Server</td>
                  <td>{plan.charAt(0).toUpperCase() + plan.slice(1)}</td>
                  <td>${{ frontend: 100, backend: 150, database: 120 }[service] * (plan === 'advanced' ? 2 : 1)}</td>
                </tr>
              )
            ))}
            <tr>
              <td colSpan="2"></td>
              <td className="total-summary">Total Estimate</td>
              <td>${calculateTotal()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingCalculator;
