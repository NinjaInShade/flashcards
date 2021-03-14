import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function RouteTracker({ children }) {
  const history = useHistory();

  useEffect(() => {
    return history.listen((location) => {
      localStorage.setItem("latestPage", location.pathname);
    });
  }, [history]);

  return children;
}
