'use client'
// TradingViewWidget.tsx
import React, { useEffect, useRef, useState, memo, ChangeEvent } from 'react';
import Container from './Container';
import Symbols from './Symbols';
import useAddCoins from '@/app/hooks/useAddCoins';
import CoinsModal from './modals/CoinsModal';

function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null);
  const [selectedSymbol, setSelectedSymbol] = useState<string>('AAPL'); // Default symbol
  const [symbols, setSymbols] = useState<string[]>(['AAPL']); // Initialize with default symbol
  const coinsModal = useAddCoins();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "${selectedSymbol}",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "2",
        "locale": "en",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "support_host": "https://www.tradingview.com"
      }`;
    if (container.current) {
      container.current.innerHTML = ''; // Clear existing content
      container.current.appendChild(script);
    }
  }, [selectedSymbol]);

  const handleSymbolChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedSymbol(event.target.value);
  };

  const updateSelectedSymbol = (newSymbol: string) => {
    setSelectedSymbol(newSymbol);
  };

  const addSymbol = (newSymbol: string) => {
    setSymbols((prevSymbols) => [...prevSymbols, newSymbol]);
  };

  return (
    <Container>
      <div className="h-screen">
        <Symbols selectedSymbol={selectedSymbol} onSymbolChange={handleSymbolChange} symbols={symbols} />
        <button onClick={() => coinsModal.onOpen(updateSelectedSymbol, addSymbol)}>Add coins</button>
        {coinsModal.isOpen && (
          <CoinsModal onSelectSymbol={updateSelectedSymbol} addSymbol={addSymbol} />
        )}

        <div className='h-screen' ref={container}></div>
      </div>
    </Container>
  );
}

export default memo(TradingViewWidget);
