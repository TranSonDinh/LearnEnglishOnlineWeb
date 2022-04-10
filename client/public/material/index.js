import { createTheme } from "@mui/material";
import palette from "./palette";
import typography from "./typography";
import breakpoints from "./breakpoints";
import components from "./components";
import createEmotionCache from "./createEmotionCache";

const theme = createTheme({
  palette,
  typography,
  breakpoints,
  components,
});

export default theme;
export { palette, typography, breakpoints, createEmotionCache };
