import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../../index';
import { isAddress, ethers, parseEther, parseUnits } from 'ethers';
import { useSelector } from 'react-redux';
import { toast } from "react-hot-toast";

const SendUi = () => {
   
    const account = useSelector((state) => state.wallet.account); // Access the account directly
    const [address, setAddress] = useState("");
    const [value, setValue] = useState("");
    const add = useRef();
    const val = useRef();
    useEffect(()=>{
        console.log(isAddress(address), address); // This should return true.
    })
    async function sendTransaction(recipientAddress, value) {
        const amount = parseEther(value);  // Convert Ether to Wei
        console.log(isAddress(recipientAddress), address);
        const transactionParams = [{
            from: account,
            to: recipientAddress,
            gas: Number(6721975).toString(16), // 21000 gas limit
            gasPrice: parseUnits("2.0", "gwei").toString(16),
            value: amount.toString(16),
        }];

        try {
            await window.ethereum.request({
                method: "eth_sendTransaction",
                params: transactionParams,
            });
            toast.success('Transaction sent successfully!')
            console.log("Transaction sent successfully!");
        } catch (error) {
            console.error("Could not send transaction:", error);
        }
    }

    const handleConfirm = () => {
        const inputAddress = add.current.value;
        const inputValue = val.current.value;
        setAddress(inputAddress);
        setValue(inputValue);
        sendTransaction(inputAddress, inputValue);
    };

    return (
        <div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label mr-3 tex-xl font-semibold text-black">
                    Send To
                </label>
                <input ref={add} type="text" className="form-control bg-white text-black" placeholder="Enter the Address" />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label mr-3 tex-xl font-semibold text-black">
                    Amount
                </label>
                <input ref={val} type="text" className="form-control bg-white text-black" placeholder="Enter the Value" />
            </div>
            <div>
                <Button
                    bgColor="bg-[#EC8305]"
                    textColor="text-black"
                    className="rounded-xl font-bold text-xl mt-10 hover:bg-[#DBD3D3] hover:text-2xl hover:font-bold"
                    onClick={handleConfirm}
                >
                    Confirm
                </Button>
            </div>
            <div>
                <h1>{`Address: ${address}`}</h1>
                <h1>{`Amount: ${value} ETH`}</h1>
            </div>
        </div>
    );
};

export default SendUi;
