import {React, useState} from 'react'
import '../../../index.css'

import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Token = () => {
    const value =  useSelector((state) => state.wallet.balance);
    const [balance, setBalance] = useState(localStorage.getItem("balance") || value)  ;

    const rewardContract = useSelector((state) => state.wallet.rewardTokenContract);
    const stackContract = useSelector((state) => state.wallet.stakeTokenContract);
    const account = useSelector((state)=> state.wallet.account);

    const [RWD, setRWD] = useState(localStorage.getItem("RWD") || '0');
    const [STK, setSTK] = useState(localStorage.getItem("STK") || '0');
    const tokenDetails = [
        {
            name: "Etherium",
            balance: balance + ' ETH'
        },
        {
            name: "Stack Token",
            balance: STK + ' STK'
        },
        {
            name: "Reward Token",
            balance: RWD + ' RWD'
        },
    ]
    const fetchBalance = async () => {
        const RWDBalancewei = await rewardContract.balanceOf(account);
        const RWDBalance = BigInt(RWDBalancewei)/1000000000000000000n;
        setRWD(RWDBalance);
        localStorage.setItem('RWD', RWDBalance);
        const STKBalancewei = await stackContract.balanceOf(account);
        const STKBalance = BigInt(STKBalancewei)/1000000000000000000n;
        setSTK(STKBalance);
        localStorage.setItem('STK', STKBalance);
        const eth = localStorage.getItem('balance');
        setBalance(eth);
        
    }
    useEffect(()=>{
        console.log({"rewardContract" : rewardContract, "stackContract":stackContract, "account":account})
        account && fetchBalance();
    }, [account]);
  return (
    <div className='ml-5 flex flex-col gap-8 mr-5'>
        {tokenDetails.map((token, index)=>(
            <div key={index} className={`flex items-center justify-between`}>
                <div className='flex gap-8 items-center'>
                    <div className=' rounded-[100%] p-2 bg-[#94c3ff] w-fit font-semibold text-xl'>{token.name.slice(0,1)}</div>
                    <div className='text-2xl font-bold '>{token.name}</div>
                </div>
                <div className='text-2xl font-bold '>{token.balance}</div>
            </div>
            
        ))}
    </div>
  )
}

export default Token