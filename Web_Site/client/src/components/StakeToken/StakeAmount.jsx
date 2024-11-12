import { useContext,useRef } from "react";
import {ethers} from "ethers"
import Web3Context from "../../context/Web3Context";
import Button from "../Button/Button";
import StakingContext from "../../context/StakingContext";
import { toast } from "react-hot-toast";


const StakeAmount =()=>{
 const {stakingContract}=useContext(Web3Context);
 const {isReload,setIsReload}=useContext(StakingContext)
 const stakeAmountRef = useRef();

 const stakeToken=async(e)=>{
   e.preventDefault();
   const amount = stakeAmountRef.current.value.trim();
   console.log(amount)
   if(isNaN(amount) || amount<=0){
    toast.error("Please enter a valid positive number.");
    return;
   }
   const amountToStake = ethers.parseUnits(amount,18).toString();
   try{
    const transaction = await stakingContract.stake(amountToStake)
    await toast.promise(transaction.wait(),
    {
      loading: "Transaction is pending...",
      success: 'Transaction successful 👌',
      error: 'Transaction failed 🤯'
    });
    stakeAmountRef.current.value = "";
    setIsReload(!isReload);
    // if (receipt.status === 1) {
    //     setIsReload(!isReload);
    //     stakeAmountRef.current.value = "";
    //   } else {
    //       toast.error("Transaction failed. Please try again.")
    //   }
    } catch (error) {
      toast.error("Staking Failed");
      console.error(error.message)
    }
  };
    return (
      <form onSubmit={stakeToken} className="stake-amount-form ">
        <label className="mr-3 text-xl font-semibold text-black">Enter Staked Amount:</label>
        <input type="text" ref={stakeAmountRef} className="bg-white text-black border-4 border-black shadow-sm mr-11 text-lg"/>
        
        <Button type="submit" bgColor="bg-[#EC8305]" textColor="text-black" className="rounded-xl font-bold text-lg ml-10 hover:bg-[#DBD3D3] hover:text-2xl hover:font-bold" onClick={stakeToken}>
          Stake Token
        </Button>
      </form>
       )
}
export default StakeAmount;