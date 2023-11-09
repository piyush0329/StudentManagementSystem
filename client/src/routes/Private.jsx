import { useState, useEffect } from "react";

import { Outlet } from "react-router-dom";
import axios from "axios";

import LoginPage from "../pages/LoginPage";
import { useAuth } from "../context/useAuth";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get("/user-auth");
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    }
    if (auth?.token) authCheck()
  }, [auth?.token]);

  return ok ? <Outlet /> : <LoginPage />;
}