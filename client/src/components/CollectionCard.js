// Libraries , css and static files
import React, { useState, useContext } from "react";
import styled from "styled-components";

// Components and util
import { AuthContext } from "../utils/AuthContext";
import { colours } from "../utils/globalCSS";

const CollectionCardWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  border-radius: 15px;
  padding: 20px;
  margin: ${(props) => props.margin || "15px"};
  width: 200px;
  height: 200px;
  background-color: ${colours.primary200};
`;

const CollectionCardOverlay = styled.div`
  position: absolute;
  z-index: 10;
  border-radius: 8px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(13, 3, 20, 0.9);
`;

const RedirectIcon = styled.i`
  position: absolute;
  z-index: 15;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #94e3f2;
`;

const CollectionName = styled.h1`
  margin-bottom: 30px;
  color: ${colours.primary600};
`;

export default function CollectionCard(props) {
  const { name, icon, id, margin, asRedirect } = props;
  const [auth] = useContext(AuthContext);
  const [hovered, setHovered] = useState(false);

  function redirectHandler() {
    window.location.href = `/user/${auth.userId}/collections/${id}`;
  }

  return (
    <CollectionCardWrapper
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      margin={margin}
    >
      {asRedirect && (
        <CollectionCardOverlay style={hovered ? {} : { display: "none" }} onClick={redirectHandler}>
          <RedirectIcon className="fas fa-directions fa-5x"></RedirectIcon>
        </CollectionCardOverlay>
      )}
      <CollectionName>{name}</CollectionName>
      <i className={`${icon} fa-5x`}></i>
    </CollectionCardWrapper>
  );
}
