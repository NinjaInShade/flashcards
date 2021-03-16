// Libraries , css and static files
import React from "react";
import { Link } from "react-router-dom";

import "./CollectionCard.css";

export default function CollectionCard({ name, icon, id, flashcardAmount }) {
  return (
    <Link to={`/collections/${id}`} className="CollectionCard-card">
      <span key={icon}>
        <i className={`${icon} fa-4x CollectionCard-icon`}></i>
      </span>
      <p className="CollectionCard-text">{name}</p>
      <p className="CollectionCard-lead">{`${flashcardAmount} flashcards`}</p>
    </Link>
  );
}
