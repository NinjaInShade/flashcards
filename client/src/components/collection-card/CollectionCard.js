// Libraries , css and static files
import React, { useContext } from "react";
import "./CollectionCard.css";
import { AuthContext } from "../../utils/AuthContext";

export default function CollectionCard(props) {
  const { name, icon, id, margin, flashcardAmount, className, idTag } = props;
  const [auth] = useContext(AuthContext);

  function redirectHandler() {
    window.location.href = `/user/${auth.userId}/collections/${id}`;
  }

  return (
    <div margin={margin} onClick={redirectHandler} id={idTag} className={`${className} CollectionCard-card`}>
      <i className={`${icon} fa-4x`} style={{ color: "#C73357" }}></i>
      <p className="CollectionCard-text">{name}</p>
      <p className="CollectionCard-lead">{`${flashcardAmount} flashcards`}</p>
    </div>
  );
}
