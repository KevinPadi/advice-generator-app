import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./components/CustomButton";
const theme = extendTheme({
  components: { Button: buttonTheme },
  styles: {
    global: {
      body: {
        fontFamily: "Manrope, sans-serif",
        bg: "hsl(218, 23%, 16%)",
        color: "white",
      },
    },
  },
});

export default extendTheme(theme);
