import { useContext } from "react";
import web3Context from "../../context/Web3Context"
import Button from "../Button/Button";
import { toast } from "react-hot-toast";


const ClaimReward = () => {
  const { stakingContract, provider } = useContext(web3Context);
  const claimReward = async () => {
    try {
      console.log("INside Claim Reward Try");
      const transaction = await stakingContract.getReward();
      await toast.promise(transaction.wait(),
        {
          loading: "Transaction is pending...",
          success: 'Transaction successful 👌',
          error: 'Transaction failed 🤯'
        });
      // Fetch the full transaction (contains from, to, value, gas, etc.)
      const transactionlog = await provider.getTransaction(transaction.hash);
      console.log('Transaction Details:', transactionlog);
      const receipt = await provider.getTransactionReceipt(transaction.hash);
      console.log('Transaction Receipt:', receipt);
      // Optional: Log specific data from the receipt
      console.log('Status:', receipt.status === 1 ? 'Success' : 'Failure');
      console.log('Gas Used:', receipt.gasUsed.toString());
      console.log('Logs:', receipt.logs);

      // Example: Loop through logs and print details
      receipt.logs.forEach((log, index) => {
        console.log(`Log ${index + 1}:`, log);
      });
      // if(receipt.status === 1){
      //     setTransactionStatus("Transaction Is Successful")
      //     setTimeout(()=>{
      //       setTransactionStatus("")
      //     },5000) 
      //   } else{
      //     setTransactionStatus("Transaction failed. Please try again.");
      //   }
    } catch (error) {
      console.error("Claim Reward Failed", error.message)
    }
  }
  return (
    <>
      <div className="claim-reward flex items-center justify-center">
        <Button bgColor="bg-[#EC8305]" textColor="text-black" className="rounded-xl font-bold text-xl  hover:bg-[#DBD3D3] hover:text-2xl hover:font-bold" onClick={claimReward}>
          Claim Reward
        </Button>
      </div>
    </>
  )
}

export default ClaimReward;