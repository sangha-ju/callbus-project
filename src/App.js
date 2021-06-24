import React from "react";
import GlobalStyle from "./style/GlobalStyle";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import RoomRegisterPage from "./pages/Register";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Route path="/" exact={true} component={Home} />
      <Route path="/room/register" exact={true} component={RoomRegisterPage} />
    </div>
  );
}

export default App;
