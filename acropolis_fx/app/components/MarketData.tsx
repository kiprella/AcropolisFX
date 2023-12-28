'use client'

import React, { useState } from 'react';
import { useMarketData } from '../hooks/useMarketData';
import Container from './Container';

const symbols = ['BTCUSD','ETHUSD'];



function HomePage() {
  const [selectedExchange, setSelectedExchange] = useState('BINANCE')
  const symbolData = useMarketData(symbols, selectedExchange);

  function PlaceOrder(symbol: any) {
    const price = (symbol)
    console.log(price);
  }

  return (

    <Container>
      <select className="
      bg-white
      text-black"
              value={selectedExchange}
              onChange={e => setSelectedExchange(e.target.value)}
      >
        <option value="KUCOIN">KUCOIN</option>
        <option value="BINANCE">BINANCE</option>
        <option value="COINBASE">COINBASE</option>
        <option value="BYBIT">BYBIT</option>

      </select>
    <h1 className='justify-center flex pt-5'>Markets:</h1>
    <div>
      {symbols.map(symbol => (
        <div key={symbol}>
          {symbolData[symbol] && (
            
            <div className='
              flex
              flex-row
              pt-5
              justify-center
            '>
              <p>{symbol} - Last Price: ${symbolData[symbol].lp}</p>
              <button className='bg-white text-black'onClick={() => {
            alert('Order placed at: $' + symbolData[symbol].lp);
            PlaceOrder(symbolData[symbol].lp)
          }
          }>Place order</button>
            </div>
          )}
        </div>
      ))}
    </div>
    </Container>
  );
}

export default HomePage;
