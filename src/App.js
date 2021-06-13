import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/open-sans/700.css";
import "@fontsource/raleway/400.css";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";

const theme = extendTheme({
  fonts: {
    heading: "Open Sans",
    body: "Raleway",
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
