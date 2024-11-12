import { useContext, useState, useEffect } from "react";
import Web3Context from "../../context/Web3Context";

const ConnectedAccount = () => {
  const { selectedAccount } = useContext(Web3Context);
  const [shortAdd, setShortAdd] = useState(''); 

  useEffect(() => {
    if (selectedAccount) {
      const shortAccount = selectedAccount.slice(0, 6) + "...." + selectedAccount.slice(-4);
      setShortAdd(shortAccount);
    }
  }, [selectedAccount]);

  return (
    <div>
      <p className="connected-ac text-black font-semibold text-base">
        {selectedAccount ? shortAdd : "Connect Account"}
      </p>
    </div>
  );
}

export default ConnectedAccount;
