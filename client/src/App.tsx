import React, { useState } from "react";
import { Color } from "./colors";
import Signup from "./components/Signup";
import PostList from "./components/PostList";
import Login from "./components/Login";
import PostForm from "./components/PostForm";
import { SetToken, SetShowSignup } from "../types";

function App() {
  const [token, setToken] = useState<string | null>(
    "vdbdjdndh39y374747t4g44gbhb7y4h"
  );
  const [showSignup, setShowSignup] = useState<boolean>(false);

  const handleLogout = (): void => {
    localStorage.removeItem("token");

    setToken(null);
  };
  return (
    <div className="min-h-screen bg-gray-100 w-full h-full">
      {token && (
        <header
          style={{ backgroundColor: Color.primaryColor }}
          className="flex justify-between text-white p-4 h-1/12"
        >
          <h1 className="text-2xl font-bold">Community Help</h1>
          {token && (
            <button
              className="rounded-md p-2 border-2 bg-white text-[#717171] cursor-pointer hover:text-white hover:bg-[#815EEA] in-hover:transform-3d"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </header>
      )}

      <main className="container w-full h-full">
        {!token ? (
          showSignup ? (
            <Signup setToken={setToken} setShowSignup={setShowSignup} />
          ) : (
            <Login setToken={setToken} setShowSignup={setShowSignup} />
          )
        ) : (
          <>
            <PostForm token={token} />
            <PostList token={token} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
