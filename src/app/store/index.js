import {configureStore} from "@reduxjs/toolkit";
import WeatherSlice from "../../features/weather/WeatherSlice";

export const store = configureStore({
        reducer: {
            weather: WeatherSlice
        }
    }
)