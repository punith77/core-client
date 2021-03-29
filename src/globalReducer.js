import { Map } from "immutable";
import { UPDATE_THEME, UPDATE_THEME_SAGA } from "./constants/actions";

const globalState = Map({
  darkTheme: false,
});

const reducer = (state = globalState, action) => {
  console.log("came to reducer");
  console.log(action);
  switch (action.type) {
    case UPDATE_THEME_SAGA:
      const updatedState = state.set("darkTheme", !state.get("darkTheme"));
      return updatedState;
    default:
      return state;
  }
};

export default reducer;
