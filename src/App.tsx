import React from 'react';
import './App.scss';
import Button from './components/Button/Button';
import currencies from './data/currencies';

const App = () => (
  <div className="app">
    <div className="selector-container">
      <div className="selector-container__row" />
      <div className="selector-container__row">
        <div className="selector-container__grid">
          {currencies.map((currency) => (
            <Button title={currency} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default App;
