import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import AuthPage from "./pages/AuthPage/AuthPage";
import HomePage from "./pages/HomePage/HomePage";
import { AuthContext } from "./contexts/AuthContext.jsx";
import { useContext } from "react";
import Navbar from "./components/Navigation/Navbar.jsx";
import UserProfile from "./pages/ProfilePage/UserProfile.jsx";

function App() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/connection" />;
  };

  const RequireNoAuth = ({ children }) => {
    return !currentUser ? children : <Navigate to="/" />;
  };

  return (
    <Box>
      <BrowserRouter>
        {currentUser && <Navbar />}

        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <HomePage />
              </RequireAuth>
            }
          />
          <Route
            path="/connection"
            element={
              <RequireNoAuth>
                <AuthPage />
              </RequireNoAuth>
            }
          />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <UserProfile />
              </RequireAuth>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />{" "}
          {/* Redirects unknown paths to the homepage */}
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
