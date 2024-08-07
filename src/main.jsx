import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

import { AuthContextProvider } from "./contexts/AuthContext.jsx";

// Define color palettes
const colors = {
  brand: {
    50: "#e3f8ff",
    100: "#b3ecff",
    200: "#81defd",
    300: "#5ed0fa",
    400: "#40c3f7",
    500: "#2bb0ed",
    600: "#1992d4",
    700: "#127fbf",
    800: "#0b69a3",
    900: "#035388",
  },
};

// Custom styles
const styles = {
  global: (props) => ({
    body: {
      bg: mode("white", "gray.800")(props),
      color: mode("gray.800", "whiteAlpha.900")(props),
      lineHeight: "1.6",
    },
    a: {
      color: mode("brand.600", "brand.300")(props),
      _hover: {
        textDecoration: "underline",
      },
    },
    button: {
      _focus: {
        boxShadow: "none",
      },
    },
  }),
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config, styles, colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
