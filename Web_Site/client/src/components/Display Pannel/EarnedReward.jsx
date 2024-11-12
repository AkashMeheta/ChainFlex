import { useState,useContext,useEffect } from "react";
import {ethers} from "ethers"
import web3Context from "../../context/Web3Context"
import { toast } from "react-hot-toast";

const EarnedReward =()=>{
  const {stakingContract,selectedAccount}=useContext(web3Context);
  const [rewardVal,setRewardVal]=useState("0");

  useEffect(()=>{
    const fetchStakeRewardInfo =async()=>{
        try{
          //fetching earned amount of a user
           const rewardValueWei = await stakingContract.earned(selectedAccount);
           const rewardValueEth = ethers.formatUnits(rewardValueWei,18).toString();
           const roundedReward = parseFloat(rewardValueEth).toFixed(2)
           
           setRewardVal(roundedReward);
           //console.log(rewardVal);
        }catch(error){
          toast.error("Error fetching the reward:");
          console.error(error.message)
        }
      }
        const interval = setInterval(()=>{
          //console.log('Earned Called', rewardVal);
          stakingContract && fetchStakeRewardInfo();
        },10000)
        return ()=> clearInterval(interval)
  },[stakingContract,selectedAccount])

  return(
    <div className="earned-reward flex justify-center gap-2">
      <p className="text-xl font-semibold text-black">Earned Reward:   </p>
      <span className="text-xl font-semibold text-black">{rewardVal}</span>
  </div>
  )
}
export default EarnedReward;