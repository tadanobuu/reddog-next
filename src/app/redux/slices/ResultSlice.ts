import { createSlice } from "@reduxjs/toolkit";

interface resultState {
    maxPoint: number;
    gameCount: number;
    winCount: number;
    loseCount: number;
    resultHistory: (number | string)[][];
}

const initialState: resultState = {
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
        gameResult: (state: resultState, action: {payload: number}) => {
            
            if( state.maxPoint < action.payload ){
                state.maxPoint = action.payload;
            }

            state.gameCount += 1;
        },
        gameHistory: (state: resultState, action: {payload: string}) => {

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