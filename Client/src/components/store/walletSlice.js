import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  balance: 0.000,
  account: 'Connect Wallet',
  stakingContract: '',
  stakeTokenContract: '',
  rewardTokenContract: '',
  chainId: '', 
};

const walletSlice = createSlice({
name: "wallet",
initialState,
reducers: {
  changeState: (state, action) => {
      
      state.balance = action.payload.balance;
      state.account = action.payload.account;
      state.stakingContract = action.payload.stakingContract;
      state.stakeTokenContract = action.payload.stakeTokenContract;
      state.rewardTokenContract = action.payload.rewardTokenContract;
      state.chainId = action.payload.chainId; 
      localStorage.setItem("balance", state.balance);
      localStorage.setItem("account", state.account);
  },
  changeBalance: (state, action) => {
    state.balance = action.payload.balance;
    state.account = action.payload.account;
    localStorage.setItem("balance", state.balance);
    localStorage.setItem("account", state.account);
  }
},
});

export const { changeState, changeBalance } = walletSlice.actions;
export default walletSlice.reducer;
