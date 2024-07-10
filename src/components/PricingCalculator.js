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

//   const history = useHistory();
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <button className="btn btn-primary mb-3" onClick={() => navigate('/')}>
        &lt; Homepage
      </button>
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
                      <h5 className="card-title">{plan.charAt(0).toUpperCase() + plan.slice(1)} ${{
                        frontend: { basic: 100, advanced: 200 },
                        backend: { basic: 150, advanced: 300 },
                        database: { basic: 120, advanced: 240 }
                      }[service][plan]}</h5>
                      <p>OS: Enterprise Linux</p>
                      <p>vCPU: {plan === 'basic' ? '4 (2 cores each)' : '8 (4 cores each)'}</p>
                      <p>RAM: {plan === 'basic' ? '16GB DDR3' : '32GB DDR3'}</p>
                      <p>Network: 1GB Ethernet</p>
                      <p>Storage: {plan === 'basic' ? '500GB SSD' : '1TB SSD'}</p>
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
              <td colSpan="3">Total Estimate</td>
              <td>${calculateTotal()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingCalculator;
