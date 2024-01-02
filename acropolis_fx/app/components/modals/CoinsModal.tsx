// CoinsModal.tsx
'use client'
import React from 'react';
import useAddCoins from '@/app/hooks/useAddCoins';
import Heading from '../Heading';
import Modal from './Modal';
import BybitDerivatives from '@/app/data/BybitDerivatives.json';

const CoinsModal = ({ onSelectSymbol, addSymbol }: { onSelectSymbol: (symbol: string) => void; addSymbol: (symbol: string) => void }) => {
  const coinsModal = useAddCoins();

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading subtitle='Add coins to watchlist' />
      <div className='text-white'>
        {BybitDerivatives.map((item) => (
          <div key={item.id}>
            <button onClick={() => {
              onSelectSymbol(item.text);
              addSymbol(item.text);
              coinsModal.onClose(); // Close the modal after selecting a coin
            }}>{item.text}</button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Modal
      disabled={false} // Adjust the disabled state based on your requirements
      isOpen={coinsModal.isOpen}
    //   title='AcropolisFX'
      onClose={coinsModal.onClose}
      body={bodyContent}
    />
  );
};

export default CoinsModal;
