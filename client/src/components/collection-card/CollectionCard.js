// Libraries , css and static files
import React, { useContext } from "react";
import { CollectionCardWrapper, CollectionName, CollectionLead } from "./CollectionCardStyle";

// Components and util
import { AuthContext } from "../../utils/AuthContext";

export default function CollectionCard(props) {
  const { name, icon, id, margin, flashcardAmount, className, idTag } = props;
  const [auth] = useContext(AuthContext);

  function redirectHandler() {
    window.location.href = `/user/${auth.userId}/collections/${id}`;
  }

  return (
    <CollectionCardWrapper margin={margin} onClick={redirectHandler} id={idTag} className={className}>
      <i className={`${icon} fa-4x`} style={{ color: "#C73357" }}></i>
      <CollectionName>{name}</CollectionName>
      <CollectionLead>{`${flashcardAmount} flashcards`}</CollectionLead>
    </CollectionCardWrapper>
  );
}
