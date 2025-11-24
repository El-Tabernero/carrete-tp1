import { BrowserRouter, Routes, Route } from "react-router";
import { AuthProvider } from "./components/screens/AuthContext";

import Home from "./components/screens/home";
import Login from "./components/screens/login";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;