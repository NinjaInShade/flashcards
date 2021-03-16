// Libraries , css and static files
import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext";

// Components and util
import AuthHome from "../pages/auth-home/AuthHome";
import NoAuthHome from "../pages/NoAuthHome/NoAuthHome";

export default function Home() {
  const { auth, setAuth } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  const latestPage = localStorage.getItem("latestPage") || "/";
  const authedPage = latestPage === "/" ? <AuthHome loading={loading} /> : <Redirect to={latestPage} />;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_DOMAIN}/auth/user/full`, { method: "GET", credentials: "include" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.error) {
          setLoading(false);
          return;
        }

        setLoading(false);
        setAuth({ isAuth: true, userId: data.user._id, name: data.user.name, email: data.user.email, collections: data.user.collections });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setAuth]);

  return auth.isAuth ? authedPage : <NoAuthHome loading={loading} />;
}
