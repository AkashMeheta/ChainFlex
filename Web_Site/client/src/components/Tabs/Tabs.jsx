import React, { useState } from 'react';
import TokenApproval from '../StakeToken/TokenApproval';
import StakeAmount from '../StakeToken/StakeAmount';
import WithdrawStakeAmount from '../Withdraw/Withdraw';
import Button from "../Button/Button"

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("stake");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className='flex justify-around mb-9'>
        <button 
          className='cursor-pointer' 
          onClick={() => handleTabClick("stake")}
        >
          <h1 className={`text-xl font-semibold ${activeTab === "stake" ? 'w-fit rounded-full px-4 py-2 bg-[var(--secondary-color)] text-black' : 'text-purple-800'}`}>
            Stake
          </h1>
        </button>
        
        <button 
          className='cursor-pointer' 
          onClick={() => handleTabClick("withdraw")}
        >
          <h1 className={`text-xl font-semibold ${activeTab === "withdraw" ? 'w-fit rounded-full px-4 py-2 bg-[var(--secondary-color)] text-black' : 'text-purple-800'}`}>
            Withdraw
          </h1>
        </button>
      </div>

      {activeTab === "stake" ? (
        <div className="mt-7">
          <TokenApproval />
          <StakeAmount />
        </div>
      ) : (
        <div className='mt-7'>
          <WithdrawStakeAmount />
        </div>
      )}
    </div>
  );
};

export default Tabs;
