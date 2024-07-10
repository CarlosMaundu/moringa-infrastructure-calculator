import './App.css';
import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import PricingCalculator from './components/PricingCalculator';

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/calculator" component={PricingCalculator} />
        <Route path='*' component={NotFound} />
      </Switch> */}

      <Router>
        <Header />
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/calculator" exact element={<PricingCalculator />} />
        </Routes>
      </Router>
      {/* GOD IS GREAT!!! */}
    </div>
  );
}

export default App;
