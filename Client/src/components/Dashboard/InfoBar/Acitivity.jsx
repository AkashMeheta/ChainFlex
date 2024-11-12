import React from 'react'

const Acitivity = () => {
    const activityDetails = [
        {
            task: 'Send Money to Address'
        },
        {
            task: 'stack 1.25 Token'
        }
    ]
  return (
    <div className='ml-5 flex flex-col gap-8 mr-5'>
        {
            activityDetails.map((activity,index) => (
                <div className={`flex items-center justify-start gap-4`} key={index}>
                    <div className='text-xl font-bold '>{`${index} )`}</div>
                    <div className='text-xl font-bold '>{activity.task}</div>
                </div>
            ))
        }
    </div>
  )
}

export default Acitivity

// import React, { useState, useEffect } from 'react';
// import { ethers } from 'ethers';

// const Acitivity = () => {
//   const [transactions, setTransactions] = useState([]);
//   const address = '0xB39b2D233B5A7fDD30833142eDC2D79CBf1af018'; // Replace with the desired address

//   const provider = new ethers.JsonRpcProvider('http://127.0.0.1:8545'); // Ganache default URL

//   const fetchTransactions = async () => {
//     try {
//       const latestBlockNumber = await provider.getBlockNumber(); // Get the latest block number
//       let txs = [];

//       for (let i = 0; i <= latestBlockNumber; i++) {
//         const block = await provider.getBlockWithTransactions(i); // Get block with transactions
//         block.transactions.forEach(tx => {
//           if (tx.from === address || tx.to === address) {
//             txs.push(tx); // Add transaction if it involves the specified address
//           }
//         });
//       }

//       setTransactions(txs); // Update state with the fetched transactions
//     } catch (error) {
//       console.error("Error fetching transactions:", error);
//     }
//   };

//   useEffect(() => {
//     fetchTransactions();
//   }, []);

//   return (
//     <div>
//       <h1>Transaction History for Address: {address}</h1>
//       <table border="1" cellPadding="10">
//         <thead>
//           <tr>
//             <th>Hash</th>
//             <th>From</th>
//             <th>To</th>
//             <th>Amount (ETH)</th>
//             <th>Block Number</th>
//           </tr>
//         </thead>
//         <tbody>
//           {transactions.map((tx, index) => (
//             <tr key={index}>
//               <td>{tx.hash}</td>
//               <td>{tx.from}</td>
//               <td>{tx.to}</td>
//               <td>{ethers.utils.formatEther(tx.value)} ETH</td> {/* Convert Wei to ETH */}
//               <td>{tx.blockNumber}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Acitivity;
