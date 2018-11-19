import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";
import personReducer from "../reducers/person";
import authReducer from "../reducers/auth";

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
      person: personReducer,
      auth: authReducer
    }),
    applyMiddleware(thunk)
  );

  return store;
};
