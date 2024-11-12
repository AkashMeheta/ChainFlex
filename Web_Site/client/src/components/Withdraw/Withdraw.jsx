import { useContext,useRef } from "react";
import {ethers} from "ethers"
import Web3Context from "../../context/Web3Context";
import StakingContext from "../../context/StakingContext";
import Button from "../Button/Button";
import { toast } from "react-hot-toast";

const WithdrawStakeAmount =()=>{
 const {stakingContract}=useContext(Web3Context);
 const {isReload,setIsReload}=useContext(StakingContext)
 const withdrawStakeAmountRef = useRef();


 const withdrawStakeToken=async(e)=>{
   e.preventDefault();
   const amount = withdrawStakeAmountRef.current.value.trim();
   console.log(amount)
   if(isNaN(amount) || amount<=0){
    console.error("Please enter a valid positive number");
    return;
   }
   const amountToWithdraw = ethers.parseUnits(amount,18).toString();
   console.log(amountToWithdraw)
   try{
    const transaction = await stakingContract.withdrawStakedTokens(amountToWithdraw)
    await toast.promise(transaction.wait(),
    {
      loading: "Transaction is pending...",
      success: 'Transaction successful 👌',
      error: 'Transaction failed 🤯'
    });
    withdrawStakeAmountRef.current.value = "";
    setIsReload(!isReload);
    // const receipt = await transaction.wait();
    // if (receipt.status === 1) {
    //     setIsReload(!isReload);
    //     withdrawStakeAmountRef.current.value = "";
    //   } else {
    //       toast.error("Transaction failed. Please try again.")
    //   }
    } catch (error) {
      toast.error("Staking Failed");
      console.error(error.message)
    }
  };
    return (
        <form className="withdraw-form" onSubmit={withdrawStakeToken}>
            <label className="mr-3 text-xl font-semibold text-black">Withdraw Token:</label>
            <input type="text" ref={withdrawStakeAmountRef} className="bg-white text-black border-4 border-black shadow-sm mr-11"/>
            
            <Button type="submit" bgColor="bg-[#EC8305]" textColor="text-black" className="ml-11 rounded-xl font-bold text-lg mt-10 hover:bg-[#DBD3D3] hover:text-2xl hover:font-bold" onClick={withdrawStakeToken}>
              Withdraw Staked Token
            </Button>
      </form>
       )
}
export default WithdrawStakeAmount;