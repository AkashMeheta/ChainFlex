import { useState,useEffect } from "react";
import { connectWallet } from "../../utils/connectWallet";
import Web3Context from "../../context/Web3Context";
import Button from "../Button/Button";
import { handleAccountChange } from "../../utils/handleAccountChange";
import { handleChainChange } from "../../utils/handleChainChange";
import { toast } from "react-hot-toast";


const Wallet =({children})=>{
 const [state,setState]=useState({
    provider:null,
    account:null,
    stakingContract:null,
    stakeTokenContract:null,
    chianId:null
 })
 const [isLoading,setIsLoading]=useState(false);
 
 useEffect(()=>{
   window.ethereum.on('accountsChanged',()=>handleAccountChange(setState))
   window.ethereum.on('chainChanged',()=>handleChainChange(setState)) 
   
   return()=>{
    window.ethereum.removeListener('accountsChanged',()=>handleAccountChange(setState))
    window.ethereum.removeListener('chainChanged',()=>handleChainChange(setState)) 
   }
},[])
 const handleWallet = async()=>{
    try{
        setIsLoading(true);
        const { provider,selectedAccount,stakingContract,stakeTokenContract,chainId} = await connectWallet();
        setState({provider,selectedAccount,stakingContract,stakeTokenContract,chainId})

    }catch(error){
       toast.error("Error connecting wallet")
       console.error(error.message)
    }finally{
        setIsLoading(false)
    }
 }
 return (
   <div className="Connect-Wallet w-fit">
     <Web3Context.Provider value={state}>{children}</Web3Context.Provider>
     {isLoading && <p>Loading...</p>}
     
     <Button bgColor="bg-[#EC8305]" textColor="text-black" className="rounded-xl font-bold text-xl mt-10 hover:bg-[#DBD3D3] hover:text-2xl hover:font-bold" onClick={handleWallet}>
      Connect Wallet
      </Button>         
   </div>
 )
}
export default Wallet;