import React from "react";
import GlobalStyle from "./style/GlobalStyle";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import RoomRegisterPage from "./pages/Register";
import RoomList from "./pages/RoomList";
import RoomDetail from "./pages/RoomList/components/RoomDetail";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Route path="/" exact={true} component={Home} />
      <Route path="/room" exact={true} component={RoomList} />
      <Route path="/room/register" exact={true} component={RoomRegisterPage} />
      <Route path="/room/:id" exac={true} component={RoomDetail} />
    </div>
  );
}

export default App;
