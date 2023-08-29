'use client'

import React from 'react';
import { useMarketData } from '../hooks/useMarketData';

const symbols = ['BTCUSD'];

function HomePage() {
  const symbolData = useMarketData(symbols);

  return (
    <div>
      <h1>Market Data</h1>
      {symbols.map(symbol => (
        <div key={symbol}>
          {symbolData[symbol] && (
            <div>
              <p>Symbol: {symbol}</p>
              <p>Last Price: {symbolData[symbol].lp}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default HomePage;
