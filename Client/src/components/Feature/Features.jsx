import React from 'react'
import {  Card } from '../index'

const Features = () => {
  const obj =[
    {
      tag: "Web App",
      heading: "Send & Receive with Ease",
      bullet1: "Instant transfers across the globe. Enjoy seamless transactions with zero intermediaries.",
      bullet2: "Borderless payments",
      bullet3: "24/7 accessibility",
      mainColor: "bg-[#efc087]",
      secondColor: "bg-[#ec8305]",
      btnHoverColor: "bg-orange-500 shadow-lg shadow-orange-500/50 hover:text-white"
    },
    {
      tag: "Passive Income",
      heading: "Staking for Passive Income",
      bullet1: "Earn rewards by staking your digital assets. Securely grow your wealth while contributing to network security.",
      bullet2: "Competitive APRs",
      bullet3: "Flexibility to stake and unstake at any time",
      mainColor: "bg-[#94c3ff]",
      secondColor: "bg-[#024caa]",
      btnHoverColor: "bg-blue-500 shadow-lg shadow-blue-500/50 hover:text-white"
    },
    {
      tag: "Quick Loans",
      heading: "Flash Loans on Demand",
      bullet1: "Leverage instant loans with no collateral. Perfect for arbitrage, liquidation, or refinancin",
      bullet2: "Zero collateral needed",
      bullet3: "Instant approval & execution",
      mainColor: "bg-[#dbd3d3]",
      secondColor: "bg-[#ffffff]",
      btnHoverColor: "bg-grey-500 shadow-lg shadow-grey-500/50 hover:text-black"
    },
    {
      tag: "Security",
      heading: "Secure & Transparent",
      bullet1: "Powered by blockchain, ChainFlex ensures full transparency, eliminating corruption and black money.",
      bullet2: "100% decentralization",
      bullet3: "Immutable, tamper-proof transactions",
      mainColor: "bg-[#949eff]",
      secondColor: "bg-[#091057]",
      textColor: "text-white",
      btnHoverColor: "bg-indigo-500 shadow-lg shadow-indigo-500/50 hover:text-white"

    },
  ]
  return (
    <>
        <div className='mt-10 ml-10 mb-[2vw]' id='explore'>
            <p className='text-[4vw] font-bold'>Why Choose <span className='text-[#EC8305]'>ChainFlex?</span></p>
        </div>
       


        <div className='flex flex-wrap gap-10'>
          {obj.map((card)=>(
            <Card key={card.tag} {...card}></Card>
          ))}
        </div>
        
    </>
  )
}

export default Features

//tag, heading, bullet1, bullet2, bullet3, mainColor, secondColor