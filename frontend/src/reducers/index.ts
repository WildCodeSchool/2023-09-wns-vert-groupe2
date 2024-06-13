import userReducer from "@/slices/userSlice";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  user: userReducer,
});
