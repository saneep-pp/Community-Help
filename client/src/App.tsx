import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Color } from "./colors";
import Signup from "./components/Signup";
import PostList from "./components/PostList";
import Login from "./components/Login";
import PostForm from "./components/PostForm";

function App() {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  const [showSignup, setShowSignup] = useState<boolean>(false);

  const handleLogout = (): void => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 w-full h-full">
        {token && (
          <header
            style={{ backgroundColor: Color.primaryColor }}
            className="flex justify-between text-white p-4 h-1/12"
          >
            <h1 className="text-2xl font-bold">Community Help</h1>
            <button
              className="rounded-md p-2 border-2 bg-white text-[#717171] cursor-pointer hover:text-white hover:bg-[#815EEA] in-hover:transform-3d"
              onClick={handleLogout}
            >
              Logout
            </button>
          </header>
        )}

        <main className="container w-full h-full">
          <Routes>
            <Route
              path="/"
              element={<Navigate to={token ? "/posts" : "/login"} replace />}
            />
            <Route
              path="/signup"
              element={
                !token ? (
                  <Signup setToken={setToken} setShowSignup={setShowSignup} />
                ) : (
                  <Navigate to="/posts" replace />
                )
              }
            />
            <Route
              path="/login"
              element={
                !token ? (
                  <Login setToken={setToken} setShowSignup={setShowSignup} />
                ) : (
                  <Navigate to="/posts" replace />
                )
              }
            />
            <Route
              path="/posts"
              element={
                token ? (
                  <>
                    <PostForm token={token} />
                    <PostList token={token} />
                  </>
                ) : (
                  <Navigate to="/signup" replace />
                )
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
