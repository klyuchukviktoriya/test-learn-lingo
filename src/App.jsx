
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import './App.css'
import Layout from './components/Layout/Layout.jsx'
import Teachers from "./components/Teachers/Teachers.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";
// import HomePage from './pages/HomePage.jsx'


const HomePage = lazy(() => import("./pages/HomePage.jsx"));
// const CatalogPage = lazy(() => import("./pages/CatalogPage.jsx");
// const CamperDetailsPage = lazy(() => import("./pages/CamperDetailsPage.jsx");

export default function App() {


  return (
    <Router>
    {/* <ToastContainer /> */}
    <Suspense>
    {/* <Suspense fallback={<Loader />}> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
  </Router>
  )
}

