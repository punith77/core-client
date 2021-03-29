import { UPDATE_THEME, UPDATE_THEME_SAGA } from "../../constants/actions";
import { useDispatch } from "react-redux";

export function updateTheme() {
  return {
    type: UPDATE_THEME,
    payload: null,
  };
}

export function updateThemeSuccess() {
  console.log("came to update success");
  return {
    type: UPDATE_THEME_SAGA,
  };
}
