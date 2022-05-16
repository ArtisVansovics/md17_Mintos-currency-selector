import React, { useState } from 'react';
import './App.scss';
import Button from './components/Button/Button';
import currencies from './data/currencies';
import CurrencyBox from './components/CurrencyBox/CurrencyBox';

const App = () => {
  const [selectedCurrencies, setSelectedCurrencies] = useState<string[]>([]);

  const filterOut = (currency: string) => (
    setSelectedCurrencies(selectedCurrencies.filter((a) => a !== currency))
  );

  const toggleCurrency = (currency: string) => {
    if (selectedCurrencies.includes(currency)) {
      filterOut(currency);
    } else setSelectedCurrencies([...selectedCurrencies, currency]);
  };

  return (
    <div className="app">
      <div className="selector-container">
        <div className="selector-container__row">
          {selectedCurrencies.map((currency) => (
            <CurrencyBox
              key={currency}
              title={currency}
              onClick={() => filterOut(currency)}
            />
          ))}
        </div>
        <div className="selector-container__row">
          <div className="selector-container__grid">
            {currencies.map((currency) => (
              <Button
                key={currency}
                title={currency}
                selected={selectedCurrencies.includes(currency)}
                onClick={() => toggleCurrency(currency)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
