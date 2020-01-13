import noteReducer from "./noteReducer";
import visibilityReducer from "./visibilityReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  notes: noteReducer,
  visibility: visibilityReducer
});

export default rootReducer;
