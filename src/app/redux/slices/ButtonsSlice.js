import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    betTime: true,
    chooseRaise: true,
    trunCard: true,
    isOpen: false,
}

const buttonsSlice = createSlice({
    name: "buttons",
    initialState,
    reducers: {
        betTimetoFalse: (state) => {
            state.betTime = false;
        },
        betTimetoTrue: (state) => {
            state.betTime = true;
        },
        chooseRaisetoFalse: (state) => {
            state.chooseRaise = false;
        },
        cardOpen: (state) => {
            state.trunCard = false;
            state.isOpen = true;
        },
        buttonsReset: (state) => {
            state.betTime = true;
            state.chooseRaise = true;
            state.trunCard = true;
            state.isOpen = false;
        }
    }
})

export const { betTimetoFalse, betTimetoTrue, chooseRaisetoFalse, cardOpen, buttonsReset } = buttonsSlice.actions;
export default buttonsSlice.reducer;