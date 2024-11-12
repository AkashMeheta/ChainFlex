import { Button, Tag } from '../index';
import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeState } from "../store/walletSlice";
import { toast } from "react-hot-toast";
import { connectWallet } from '../Util/connectWallet';


const Hero = () => {
  const authStatus = useSelector((state) => state.auth.status); // Correctly select `authStatus` from the Redux store
  const dispatch = useDispatch();
  
  const handleWallet = async () => {
    try {
      const { provider, selectedAccount, stakingContract, stakeTokenContract,rewardTokenContract, chainId  } = await connectWallet();
      const balance = await provider.getBalance(selectedAccount);
      const ethValue = balance / 1000000000000000000n;
      console.log("Hero:", stakingContract, stakeTokenContract, rewardTokenContract);
      dispatch(changeState({
        balance: ethValue.toString(),
        account: selectedAccount,
        stakingContract: stakingContract,
        stakeTokenContract: stakeTokenContract,
        rewardTokenContract: rewardTokenContract,
        chainId
      }));
      localStorage.setItem("account", selectedAccount);
      localStorage.setItem("chainId", chainId);
      const temp = ethValue.toString()
      localStorage.setItem("balance", temp );
    } catch (error) {
      toast.error("Error connecting wallet");
      console.error(error.message);
    }
  };

  return (
    <div className='ml-14 relative w-full h-fit'>
      <div className='absolute -z-10 opacity-20 flex justify-center items-center w-full h-fit'>
        <img className='w-[25vw] pt-[3vw]' src="/bg1.svg" alt="" />
      </div>

      <div>
        <Tag />
        <div><p className='text-[5vw] font-semibold'>Unlock the Future of</p></div>
        <div><p className='text-[5vw] font-semibold'>Finance with <span className='text-[#EC8305]'>ChainFlex</span></p></div>
        <div><p className='text-[1.5vw] font-semibold'>Send, Receive, Stake, and Secure Flash Loans with the Power of Blockchain</p></div>

        {
          authStatus ? (
            <Button bgColor="bg-[#EC8305]" textColor="text-black" className="rounded-xl font-bold text-xl mt-10 hover:bg-[#DBD3D3] hover:text-2xl hover:font-bold" onClick={handleWallet}>
              <Link to="/dashboard">Connect Wallet</Link>
            </Button>
          ) : (
            <Button bgColor="bg-[#EC8305]" textColor="text-black" className="rounded-xl font-bold text-xl mt-10 hover:bg-[#DBD3D3] hover:text-2xl hover:font-bold">
              <Link to="/login">Get Started</Link>
            </Button>
          )
        }
      </div>
    </div>
  );
};

export default Hero;
