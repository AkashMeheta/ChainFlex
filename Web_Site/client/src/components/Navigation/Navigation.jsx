import ConnectedAccount from "./ConnectedAccount";
import ConnectedNetwork from "./ConnectedNetwork";
import ClaimReward from "../ClaimReward/ClaimReward";

const Navigation = ()=>{
  return(
    <header className="navbar flex justify-between gap-10">
    <div className="navbar-btns ">
      <ClaimReward />
    </div> 
    <div className="navbar-acc ">
      <ConnectedAccount />
      <ConnectedNetwork />
    </div>
  </header>
  )
}
export default Navigation;