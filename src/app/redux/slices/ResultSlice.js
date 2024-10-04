import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    maxPoint: 100,
    gameCount: 0,
    winCount: 0,
    loseCount: 0,
    resultHistory: []
}

const resultSlice = createSlice({
    name: "result",
    initialState,
    reducers: {
        gameResult: (state, action = {payload: 0}) => {
            
            if( state.maxPoint < action.payload ){
                state.maxPoint = action.payload;
            }

            state.gameCount += 1;
        },
        gameHistory: (state, action) => {

            if( action.payload === "win" ){
                state.winCount += 1;
            }else if( action.payload === "lose" ){
                state.loseCount += 1;
            }

            if( state.resultHistory.length === 10){
                state.resultHistory = state.resultHistory.filter((result, index) => index !== 0);
            }
            state.resultHistory.push( [state.gameCount , action.payload] );
        }

    }
})

export const { gameResult, gameHistory } = resultSlice.actions;
export default resultSlice.reducer;