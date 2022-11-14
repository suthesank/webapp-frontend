import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { loadComingSoon } from "./actions/actions";
import { AppState } from "./index";
import Home from "./views/home";
import SecondPage from "./views/second_page/second_page";
import NestedView from "./views/second_page/nested_view";

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="second_page" element={<SecondPage />}>
            <Route path="nested_view" element={<NestedView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
