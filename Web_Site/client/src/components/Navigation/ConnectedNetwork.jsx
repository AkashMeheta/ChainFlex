import { useContext } from "react"
import Web3Context from "../../context/Web3Context"

const ConnectedNetwork = ()=>{
   const {chainId}=useContext(Web3Context);
   if(chainId===null){
      return <p className=" text-black font-semibold text-base">Not connected</p>
   }
   else if (chainId === 11155111) {
      return(
        <>
          <p className="text-black font-semibold text-base">Network: <span className=" text-black font-semibold text-base">Sepolia</span></p>
        </>
      )
    }else if (chainId === 1337) {
      return(
        <>
          <p className="text-black font-semibold text-base">Network: <span className=" text-black font-semibold text-base">Ganache</span></p>
        </>
      ) 
    } else {
      return (
        <>
          <p className="text-black font-semibold text-base">Network: <span className=" text-black font-semibold text-base"> Network Not Detected</span></p>
        </>
      ) 
    }
}
export default ConnectedNetwork