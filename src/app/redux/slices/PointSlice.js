import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    point: 100,
    betPoint: 0,
    winPoint: 0,
}

const pointSlice = createSlice({
    name: "point",
    initialState,
    reducers: {
        add: (state, action) => {
            if(state.point - action.payload >= 0){
                state.point -= action.payload;
                state.betPoint += action.payload;
            }
        },
        minus: (state, action) => {
            if(state.betPoint - action.payload >= 0){
                state.point += action.payload;
                state.betPoint -= action.payload;
            }
        },
        win: (state, action) => {
            state.winPoint = (state.betPoint * action.payload);
            state.betPoint = (state.betPoint * action.payload);
        },
        lose: (state) => {
            state.betPoint = 0;
        },
        resetBetPoint: (state) => {
            state.point += state.winPoint
            state.winPoint = 0;
            state.betPoint = 0;
        },
    }
})

export const { add , minus , win , lose , resetBetPoint } = pointSlice.actions;
export default pointSlice.reducer;