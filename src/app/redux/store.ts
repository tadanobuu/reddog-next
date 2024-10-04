import { configureStore } from "@reduxjs/toolkit";
import pointReducer from "./features/points/PointSlice";
import gameReducer from "./features/game/GameSlice";
import resultReducer from "./features/result/ResultSlice";
import buttonsReducer from "./features/buttons/ButtonsSlice";

export const store = configureStore({
    reducer: {
        point: pointReducer,
        game: gameReducer,
        result: resultReducer,
        buttons: buttonsReducer,
    },
});