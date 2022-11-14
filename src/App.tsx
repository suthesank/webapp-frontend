import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { loadComingSoon } from "./actions/actions";
import { AppState } from "./index";

function App() {
  const dispatch = useDispatch();
  const coming_soon = useSelector(
    (state: AppState) => state.reducer?.coming_soon
  );

  React.useEffect(() => {
    dispatch(loadComingSoon());
  }, []);

  React.useEffect(() => {
    console.log(coming_soon);
  }, [coming_soon]);

  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
