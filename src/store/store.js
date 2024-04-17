import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

//root reducer
import { rootReducer } from "./rootReducer";

//middlewares
const middleWares = [logger];
const composedEnhancers = compose(applyMiddleware(...middleWares));

//store
export const store = createStore(rootReducer, undefined, composedEnhancers);
