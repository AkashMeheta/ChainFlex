import { useState } from "react"
import Wallet from "./components/Wallet/Wallet"
import Navigation from "./components/Navigation/Navigation"
import DisplayPannel from './components/Display Pannel/DisplayPannel'

import Separator from "./components/ui/Separator"
import { StakingProvider } from './context/StakingContext'
import Tabs from "./components/Tabs/Tabs"
import './App.css'
import './index.css'
// import {BackgroundLines} from "./components/ui/background-lines"
import {Toaster} from "react-hot-toast"
function WebApp() {

 

  return (
    
      <div className="w-fit m-auto border-4 border-[var(--secondary-color)] h-fit mt-8 flex flex-col items-center justify-center bg-white">
        <Wallet>
          <Navigation />

          
          <StakingProvider>
            <DisplayPannel />
            <Tabs></Tabs>
          </StakingProvider>
          
          <Toaster className="toast" position="bottom-left"/>
        </Wallet>
      </div>
      // <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      // </BackgroundLines>
  )
}
export default WebApp;

// import React from "react";
// import {BackgroundLines}   from "../src/components/ui/background-lines";

// function App() {
//   return (
//     <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
//       <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
//         Sanjana Airlines, <br /> Sajana Textiles.
//       </h2>
//       <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
//         Get the best advices from our experts, including expert artists,
//         painters, marathon enthusiasts and RDX, totally free.
//       </p>
//     </BackgroundLines>
//   );
// }
// export default App