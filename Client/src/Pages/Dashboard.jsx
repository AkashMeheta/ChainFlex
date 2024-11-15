import React, { useEffect, useState } from 'react'
import {ethers} from "ethers";
import '../index.css';
import {  useDispatch, useSelector } from 'react-redux';
import { changeBalance } from '../components/store/walletSlice';
import {UserActivities, UserTask, Infobar, connectWallet} from "../components/index";
import { Toaster } from 'react-hot-toast';

const Dashboard = () => {
  
  const rewardContract = useSelector((state) => state.wallet.rewardTokenContract);
    const stackContract = useSelector((state) => state.wallet.stakeTokenContract);

  const accountAddress = useSelector((state)=>state.wallet.account)
  const [account, setAccount] = useState(localStorage.getItem("account") || accountAddress);
  const [chainId, setChainId] = useState(localStorage.getItem("chainId") || "");

  const value =  useSelector((state) => state.wallet.balance)
  const authStatus = useSelector((state)=>state.auth.status);
  const [balance, setBalance] = useState(localStorage.getItem("balance") || value);

  const dispatch = useDispatch();
  const fetchBalance = async () => {
    const { provider, selectedAccount } = await connectWallet();
    const newbalance = await provider.getBalance(selectedAccount);
    const ethValue = newbalance / 1000000000000000000n;
    dispatch(changeBalance({
      balance: ethValue.toString(),
      account: selectedAccount.toString()
    }));
    setBalance(ethValue);
    setAccount(selectedAccount);
  };

  useEffect(() => {
    console.log({"rewardContract" : rewardContract, "stackContract":stackContract, "account":account})
    const savedAccount = localStorage.getItem("account");
    const savedChainId = localStorage.getItem("chainId");
    
    if (savedAccount && savedChainId ) {
      setAccount(savedAccount);
      setChainId(savedChainId);
    }
    let balanceInterval;
    if (account && authStatus) {
      balanceInterval = setInterval(fetchBalance, 10000); // Fetch balance every 10 seconds
    }
    return () => clearInterval(balanceInterval);
  }, [account, chainId]); 

  let shortAccount = account.slice(0, 6) + "...." + account.slice(-4);

  return (
    <>
      <div className='w-3/5 m-auto border-4 border-[var(--secondary-color)] bg-white h-fit pb-10 mt-8'>
          <div className='flex justify-around mt-8 flex-wrap'>
            <h1 className='text-black font-semibold text-xl'>
              {
                `${shortAccount}`
              }
              
            </h1>
            <h1 className='text-black font-semibold text-xl'>
              {
                `${chainId}`
              }
            </h1>
          </div>

          <div className='flex justify-center mt-8'>
            <h1 className='text-black text-6xl'>
              {`${balance} Eth`}
            </h1>
          </div>

          
            <UserActivities></UserActivities>
         

          <hr className="my-4 border-1 border-black w-3/4 m-auto" />

        
          <UserTask/>
          

          <hr className="my-6 border-1 border-black w-3/4 m-auto" />

          
            <Infobar></Infobar>
          
          <Toaster position='bottom right'/>
      </div>
    </>
  )
}

export default Dashboard