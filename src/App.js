import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import Layout from "./pages/Layouts/Layout/Layout";
import HomeLayout from "./pages/Layouts/HomeLayout/HomeLayout";

// 404 Page
import NoPage from "./pages/NoPage";

// Landing
import Landing from "./pages/Landing/Landing";

// Dashboard
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="/home" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
