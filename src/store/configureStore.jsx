import { createStore,combineReducers } from "redux";
import { blogReducer } from "../reducers/blogreducer";

// Store Start
const configureStore =  () => {
  const store = createStore(
    combineReducers({
      actionreducer:blogReducer
    })
  );
  return store;
};
export default configureStore;
// Store End