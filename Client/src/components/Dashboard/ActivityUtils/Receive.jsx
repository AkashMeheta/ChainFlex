import React from 'react';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast'; 
import { FaCopy } from "react-icons/fa";

const Receive = () => {
  
  const account = useSelector((state) => state.wallet.account);

  const handleCopy = async () => {
    try {
     
      await navigator.clipboard.writeText(account);
      
      
      toast.success('Address copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy text:', error);
      
      toast.error('Failed to copy address.');
    }
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <div>
        <img
          src='/MetaMask_Fox.svg.png'
          alt='MetaMask Fox'
          className='max-w-20 max-h-20'
        />
      </div>
      <h2 className='text-black font-semibold text-xl'>My Address</h2>

     
      <div className='text-black font-medium text-lg'>{account}</div>
      
     
      <button className='ml-2 cursor-pointer' onClick={handleCopy}>
      <FaCopy />
      </button>
    </div>
  );
};

export default Receive;
