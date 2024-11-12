import { useContext } from "react"
import Web3Context from "../../context/Web3Context"

const ConnectedNetwork = ()=>{
   const {chainId}=useContext(Web3Context);
   if(chainId===null){
      return <p className="network text-black font-semibold text-base">Not connected</p>;
   }
   else if (chainId === 11155111) {
      return <p className="network text-black font-semibold text-base">Sepolia</p>;
    }else if (chainId === 1337) {
      return <p className="network text-black font-semibold text-base">Ganache</p>;
    } else {
      return <p className="network text-black font-semibold text-base"> Network Not Detected</p>;
    }
}
export default ConnectedNetwork