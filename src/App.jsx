import { BrowserRouter, Routes, Route } from "react-router";
import { AuthProvider } from "./components/screens/AuthContext";

import Home from "./components/screens/home";
import Login from "./components/screens/login";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import Header from "./components/Header/Header";
import About from "./components/screens/about/About";
import Contact from "./components/screens/contact/contact";

function App() {
  return (
    <BrowserRouter>
    
      <AuthProvider>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movie/:id" element={<MovieDetail/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;