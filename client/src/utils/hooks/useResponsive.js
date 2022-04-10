import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/styles";

const useResponsive = (range = "between", from = "md", to = "lg") => {
  const theme = useTheme();
  let mediaScreen;
  switch (range) {
    case "down":
      mediaScreen = theme.breakpoints.down(from);
      break;
    case "up":
      mediaScreen = theme.breakpoints.up(from);
      break;
    default:
      mediaScreen = theme.breakpoints.between(from, to);
  }
  return useMediaQuery(mediaScreen);
};

export default useResponsive;
