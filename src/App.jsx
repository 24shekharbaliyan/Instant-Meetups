import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Chatroom from "./pages/Chatroom";
import Login from "./pages/Login";
import PrivateRoute from "./Routes/PrivateRoute";
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/chat"
            element={
              <PrivateRoute>
                <Chatroom />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
