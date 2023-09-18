import { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { AuthContext } from "./context/Auth";

function App() {
  const { token } = useContext(AuthContext);
  if (token) {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    );
  } else {
    return <Login />;
  }
}

export default App;
