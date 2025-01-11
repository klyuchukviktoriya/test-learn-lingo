import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout.jsx";
// import Teachers from "./components/Teachers/Teachers.jsx";
// import Favorites from "./components/Favorites/Favorites.jsx";
import { useDispatch } from "react-redux";
import { refreshUser } from "./redux/auth/operations.js";
import { useEffect } from "react";
// import PrivateRoute from "./routes/PrivateRoute.jsx";
// import FavoritesPage from "./pages/FavoritesPage.jsx";
// import HomePage from './pages/HomePage.jsx'

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const TeachersPage = lazy(() => import("./pages/TeachersPage.jsx"));
// const FavoritesPage = lazy(() => import("./pages/FavoritesPage.jsx");

export default function App() {
  const dispatch = useDispatch();

useEffect(() => {
  dispatch(refreshUser());
}, [dispatch]);

  return (
    <Router>
      {/* <ToastContainer /> */}
      <Suspense>
      {/* <Suspense fallback={<FlyingObjects />}> */}
        {/* <Suspense fallback={<Loader />}> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/teachers" element={<TeachersPage />} />
            {/* <Route path="/favorites" element={<PrivateRoute component={<FavoritesPage />} />} /> */}
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
