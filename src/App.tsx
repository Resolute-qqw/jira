import React from "react";
import "./App.css";
import { useAuth } from "context/auth-context";
import { Authenticated } from "authenticated-app";
import { UnauthenticatedApp } from "unauthenticated-app";

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
      {user ? <Authenticated /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
