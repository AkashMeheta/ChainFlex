import {ethers,Contract} from "ethers";
import stakingAbi from "../ABI/stackingABI.json"
import stakeTokenAbi from "../ABI/stackTokenABI.json";


export const connectWallet = async()=>{
    try{
       let [signer,provider,stakingContract,stakeTokenContract,chainId]=[null,null,null,null,null];
       if(window.ethereum===null){
          throw new Error("Metamsk is not installed");
       }
       const accounts = await window.ethereum.request({
        method:'eth_requestAccounts'
       })

       let chainIdHex= await window.ethereum.request({
        method:'eth_chainId'
       })
       chainId= parseInt(chainIdHex,16)
       
       let selectedAccount =accounts[0];
       if(!selectedAccount){
        throw new Error("No ethereum accounts available")
       } 

       provider = new ethers.BrowserProvider(window.ethereum);
       signer = await provider.getSigner();

    //    const stakingContractAddress="0xFb3F970B2F9A848a8c6c89b339b19f6692385106"
    //    const stakeTokenContractAddress="0xe7a0a4D82Ea0954ffA2ef86898c2d89DD51548f1"

    const stakingContractAddress="0x213810e88BdcD530533B128C8aAa4828bF298b46";
    const stakeTokenContractAddress="0xd5f12263B996d777Ef51ED706303bBA3EcBE792B";
    const rewardTokenContractAddress="0xca9Fe8a3fc0f7c25BC8f7bd70B90F31b289ed793";

       stakingContract= new Contract(stakingContractAddress,stakingAbi,signer);
       stakeTokenContract=new Contract(stakeTokenContractAddress,stakeTokenAbi,signer);

       return {provider,selectedAccount,stakeTokenContract,stakingContract,chainId}

    }catch(error){
        console.error(error);
        throw error
    }
    
}