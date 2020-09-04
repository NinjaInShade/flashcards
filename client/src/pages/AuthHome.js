// Libraries , css and static files
import React, { useContext, useState } from "react";
import "./AuthHome.css";

// Components and util
import { AuthContext } from "../util/AuthContext";
import DonutChart from "../components/DonutChart";

export default function AuthHome(props) {
  const [auth] = useContext(AuthContext);
  // eslint-disable-next-line
  const [values, setValues] = useState({
    groups: {
      value: 17,
      max: auth.supporter ? 20 : 10,
    },
    flashcards: {
      value: 14,
      max: auth.supporter ? 50 : 20,
    },
  });

  const content = (
    <div className="contentColumn">
      <div className="headingRow">
        {auth.supporter && <i className="fas fa-certificate fa-3x" style={{ color: "#6A1B9A" }}></i>}
        <h1 className="username">{auth.username}</h1>
      </div>
      <hr />
      <div className="statsRow">
        <div className="statsColumm">
          <h2 className="statsHeader">Groups</h2>
          <DonutChart size="150" strokewidth="20" value={`${(values.groups.value / values.groups.max) * 100}`} valuelabel={`${values.groups.value}/${values.groups.max}`} />
        </div>
        <div className="statsColumm">
          <h2 className="statsHeader">Flashcards</h2>
          <DonutChart size="150" strokewidth="20" value={`${(values.flashcards.value / values.flashcards.max) * 100}`} valuelabel={`${values.flashcards.value}/${values.flashcards.max}`} />
        </div>
      </div>
    </div>
  );
  return content;
}
