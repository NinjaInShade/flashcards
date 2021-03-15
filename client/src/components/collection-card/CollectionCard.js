// Libraries , css and static files
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../utils/AuthContext";

import "./CollectionCard.css";

export default function CollectionCard({ name, icon, id, flashcardAmount }) {
  const { auth } = useContext(AuthContext);

  return (
    <Link to={`/user/${auth.userId}/collections/${id}`} className="CollectionCard-card">
      <span key={icon}>
        <i className={`${icon} fa-4x CollectionCard-icon`}></i>
      </span>
      <p className="CollectionCard-text">{name}</p>
      <p className="CollectionCard-lead">{`${flashcardAmount} flashcards`}</p>
    </Link>
  );
}
