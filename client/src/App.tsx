import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Color } from "./colors";
import Signup from "./components/Signup";
import PostList from "./components/PostList";
import Login from "./components/Login";
import Header from "./components/Header";
import PostForm from "./components/PostForm";
import Footer from "./components/Footer";

function App() {
  const [token, setToken] = useState<string | null>(
    // localStorage.getItem("token")
    "dydudbdcdcudbcduducdu"
  ); // Simulating a logged-in state
  const [showSignup, setShowSignup] = useState<boolean>(false);

  const handleLogout = (): void => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 w-full h-full">
        {token && <Header />}

        <main className="container flex flex-col w-full h-screen flex-wrap">
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
                  <PostList token={token} />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route
              path="/create-post"
              element={
                token ? (
                  <PostForm token={token} />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
          </Routes>
        </main>
        {token && <Footer />}
      </div>
    </BrowserRouter>
  );
}

export default App;
