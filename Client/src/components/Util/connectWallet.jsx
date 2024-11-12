import {ethers,Contract} from "ethers";
import stakingAbi from "../../ABI/stakingAbi.json"
import stakeTokenAbi from "../../ABI/stakeTokenAbi.json";
import rewardTokenAbi from "../../ABI/rewardTokenAbi.json"


export const connectWallet = async()=>{

    try{
       let [signer,provider,stakingContract,stakeTokenContract,rewardTokenContract,chainId]=[null,null,null,null,null,null];
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

    //    const stakingContractAddress="0xfB528B5905C8f9398fb625Ab4155C567A75cCC9F"
    //    const stakeTokenContractAddress="0x5263fdc29e84891ded4e0fb8be4084398d9a6e84"

        const stakingContractAddress="0x213810e88BdcD530533B128C8aAa4828bF298b46";
        const stakeTokenContractAddress="0xd5f12263B996d777Ef51ED706303bBA3EcBE792B";
        const rewardTokenContractAddress="0xca9Fe8a3fc0f7c25BC8f7bd70B90F31b289ed793";

       stakingContract= new Contract(stakingContractAddress,stakingAbi,signer);
       stakeTokenContract=new Contract(stakeTokenContractAddress,stakeTokenAbi,signer);
       rewardTokenContract=new Contract(rewardTokenContractAddress, rewardTokenAbi,signer)

       

       return {provider,selectedAccount,stakeTokenContract,stakingContract, rewardTokenContract, chainId}

    }catch(error){
        console.error(error);
        throw error
    }
    
}