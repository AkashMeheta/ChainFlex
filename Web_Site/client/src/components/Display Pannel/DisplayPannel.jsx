import RewardRate from "./RewardRate";
import StakedAmount from "./StakedAmount";
import EarnedReward from "./EarnedReward";

const DisplayPannel = ()=>{
  return(   
  <div className="p-4 flex flex-col gap-2 border-4 mb-4 border-black rounded-xl">
    <StakedAmount/>
    <RewardRate/>
    <EarnedReward/>
  </div>
  )
}
export default DisplayPannel;