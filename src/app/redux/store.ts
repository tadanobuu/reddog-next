import { configureStore } from "@reduxjs/toolkit";
import pointReducer from "./slices/PointSlice";
import gameReducer from "./slices/GameSlice";
import resultReducer from "./slices/ResultSlice";
import buttonsReducer from "./slices/ButtonsSlice";

const store = configureStore({
    reducer: {
        point: pointReducer,
        game: gameReducer,
        result: resultReducer,
        buttons: buttonsReducer,
    },
});

// RootState型とAppDispatch型をエクスポート
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;