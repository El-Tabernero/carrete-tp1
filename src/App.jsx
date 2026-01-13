import { BrowserRouter, Routes, Route } from "react-router";
import { AuthProvider } from "./components/screens/AuthContext";

import Home from "./components/screens/home";
import Login from "./components/screens/login";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
    
      <AuthProvider>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movie/:id" element={<MovieDetail/>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;