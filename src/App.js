import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import Layout from "./pages/Layouts/Layout/Layout";
import HomeLayout from "./pages/Layouts/HomeLayout/HomeLayout";

// 404 Page
import NoPage from "./pages/NoPage";

//Auth
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";

// Landing
import Landing from "./pages/Landing/Landing";

// Dashboard
import Home from "./pages/Home/Home";
import Communities from "./pages/Communities/Communities";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
        </Route>
        <Route path="/auth">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/home" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="communities" element={<Communities />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
