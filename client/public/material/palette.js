const white = "#FFFFFF";
const black = "#172123";

export default {
  mode: "dark",
  common: {
    black: "#1D1D27",
    white,
  },
  primary: {
    contrastText: white,
    dark: "#203754",
    main: "#385982",
    light: "",
    activated: "",
    border: "#49678c",
  },
  secondary: {
    contrastText: white,
    dark: "#6DA421",
    main: "#74C603",
    light: "",
  },
  link: {
    primary: "",
    secondary: "",
    link: "#2C8CFF", // rgb 44, 140, 255
  },
  success: {
    contrastText: black,
    dark: "#4fb603",
    main: "#58cc02",
    light: "",
  },
  attention: {
    contrastText: white,
    dark: "#215FA9",
    main: "#1cb0f6",
    light: "",
  },
  warning: {
    contrastText: white,
    dark: "#D3B239",
    main: "#F4C416",
    light: "",
    gradient: "linear-gradient(180deg, #F4C416 0%, #FFA553 100%)",
  },
  error: {
    contrastText: white,
    dark: "#A93131",
    main: "#FF4B4B",
    light: "#FF9F9F",
  },
  grey: {
    main: "#f7f7f7",
    100: "#e5e5e5",
    200: "#c2bebe",
    300: "#afafaf",
    400: "#1899d6",
    500: "#4A5665",
    600: "rgba(255, 255, 255, 0.6)",
    700: "#192335",
    800: "#151E2B",
    900: "#0E151F",
    A100: "rgba(255, 255, 255, 0.3)",
    A200: "#989FA7",
    A300: "#172030",
    A400: "#1F262F",
    A500: "#102E3D",
    A600: "#2D3B4D",
  },
  text: {
    primary: "#4B4B4B",
    secondary: "#0b3e71",
    link: "#2C8CFF",
    disabled: "rgba(255, 255, 255, 0.7)",
    subText: "#777777",
  },
  background: {
    default: "#FFFFFF",
    paper:
      "linear-gradient(180deg, rgba(255, 255, 255, 0.0698) 85.21%, rgba(255, 255, 255, 0.093) 100%)",
    dark: "#235390",
  },
  pink: {
    main: "#FF00FF",
  },
  icon: "#BBC0C5",
  divider: "#303E4F",
};
