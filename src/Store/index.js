import { createStore } from "redux";
import rootReducer from "../Reducer";

let initialState = {
  notes: [
    {
      title: "You are awesome",
      content: "No, wait, I meant legendary!",
      id: new Date().getTime()
    },
    {
      title: "Ooops",
      content: "I was talking to myself",
      id: new Date().getTime() + 2
    }
  ],
  visibility: "AWESOME_TAG"
};

export default createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
