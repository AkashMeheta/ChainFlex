import ConnectedAccount from "./ConnectedAccount";
import ConnectedNetwork from "./ConnectedNetwork";
import ClaimReward from "../ClaimReward/ClaimReward";

const Navigation = ()=>{
  return(
    <div className="flex justify-between gap-10 w-full p-4">
      <ClaimReward />

    <div className="flex items-center flex-col">
      <ConnectedAccount />
      <ConnectedNetwork />
    </div>
  </div>
  )
}
export default Navigation;