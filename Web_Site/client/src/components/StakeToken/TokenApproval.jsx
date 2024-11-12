import { useContext,useRef } from "react";
import {ethers} from "ethers"
import Web3Context from "../../context/Web3Context";
import Button from "../Button/Button";
import { toast } from "react-hot-toast";
const TokenApproval =()=>{
 const {stakeTokenContract,stakingContract}=useContext(Web3Context);
 const approvedTokenRef = useRef();

 const approveToken=async(e)=>{
   e.preventDefault();
   const amount = approvedTokenRef.current.value.trim();
   if(isNaN(amount) || amount<=0){
    console.error("Please enter a valid positive number");
    return;
   }
   const amountToSend = ethers.parseUnits(amount,18).toString();
   try{
    const transaction = await stakeTokenContract.approve(stakingContract.target,amountToSend)
    await toast.promise(transaction.wait(),
    {
      loading: "Transaction is pending...",
      success: 'Transaction successful 👌',
      error: 'Transaction failed 🤯'
    });
    approvedTokenRef.current.value = "";
    } catch (error) {
      toast.error("Token Approval Failed");
      console.error(error.message)
    }
  };
 return (
  <div className="flex justify-between items-center mb-4">
     <form onSubmit={approveToken} className="token-amount-form">
        <label className="token-input-label  mr-3 text-xl font-semibold text-black">Token Approval:</label>
        <input type="text" ref={approvedTokenRef} className="bg-white text-black border-4 border-black shadow-sm text-lg font-semibold"/>
        
        <Button type="submit" bgColor="bg-[#EC8305]" textColor="text-black" className="rounded-xl text-lg ml-10 font-semibold hover:bg-[#DBD3D3] hover:text-2xl hover:font-bold" onClick={approveToken}>
          Token Approval
        </Button>
      </form>
 </div>
 )
}
export default TokenApproval;