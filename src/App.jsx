import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import AuthPage from "./pages/AuthPage/AuthPage";
import HomePage from "./pages/HomePage/HomePage";
import { AuthContext } from "./contexts/AuthContext.jsx";
import { useContext } from "react";

function App() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/connection" />;
  };

  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <HomePage />
              </RequireAuth>
            }
          />
          <Route path="/connection" element={<AuthPage />} />
          <Route path="*" element={<Navigate to="/" />} />{" "}
          {/* Redirects unknown paths to the homepage */}
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
