import { configureStore } from "@reduxjs/toolkit";
import pointReducer from "./slices/PointSlice";
import gameReducer from "./slices/GameSlice";
import resultReducer from "./slices/ResultSlice";
import buttonsReducer from "./slices/ButtonsSlice";

export const store = configureStore({
    reducer: {
        point: pointReducer,
        game: gameReducer,
        result: resultReducer,
        buttons: buttonsReducer,
    },
});