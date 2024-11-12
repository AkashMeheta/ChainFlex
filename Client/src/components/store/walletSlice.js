import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    
    balance: 0.000,
    account: 'Connect Wallet',
    stakingContract: '',
    stakeTokenContract: '',
    chianId: '',
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
        state.chianId = action.payload.chainId;

        localStorage.setItem("balance", state.balance);
        localStorage.setItem("account", state.account);
    },
  },
});

export const { changeState } = walletSlice.actions;
export default walletSlice.reducer;
