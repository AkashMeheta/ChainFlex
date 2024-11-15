import { useState,useEffect,useContext } from "react";
import Web3Context from "../../context/Web3Context";
import StakingContext from "../../context/StakingContext";
import {ethers} from "ethers"
import { toast } from "react-hot-toast";



const StakedAmount = ()=>{
   const {stakingContract,selectedAccount}=useContext(Web3Context);
   const {isReload}=useContext(StakingContext)
   const [stakedAmount,setStakedAmount]=useState("0");

   useEffect(()=>{
     const fetchStakedBalance = async()=>{
        try{
           const amountStakedWei = await stakingContract.stakedBalance(selectedAccount)
           const amountStakedEth = ethers.formatUnits(amountStakedWei.toString(),18);
           setStakedAmount(amountStakedEth)
        }catch(error){
         toast.error("Error fetching staked amount");
         console.error(error.message)
        }
     }
     stakingContract && fetchStakedBalance()
   },[stakingContract,selectedAccount,isReload])

   return(
      <div className="staked-amount flex justify-center gap-2">
       <p className="text-xl font-semibold text-black mr-2">Staked Amount:</p> 
       <span className="text-xl font-semibold text-black">{stakedAmount}</span>
      </div>
   )
}
export default StakedAmount;