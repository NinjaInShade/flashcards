// Libraries , css and static files
import React, { useState, useContext } from "react";
import styled from "styled-components";

// Components and util
import { AuthContext } from "../utils/AuthContext";

const CollectionCardWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  border-radius: ${(props) => props.borderRadius || "8px"};
  margin: ${(props) => props.margin || "20px"};
  padding: ${(props) => props.padding || "70px 70px"};
  background-color: ${(props) => props.bgColour || "#6a1b9a"};
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
  color: white;
`;

const CollectionName = styled.h1`
  font-weight: bold;
  margin-bottom: 30px;
  color: ${(props) => props.txtColour || "#a58ffd"};
`;

const CollectionIcon = styled.img`
  width: 120px;
  height: 120px;
`;

export default function CollectionCard(props) {
  const { name, icon, id, borderRadius, margin, padding, bgColour, txtColour } = props;
  const [auth] = useContext(AuthContext);
  const [hovered, setHovered] = useState(false);

  function redirectHandler() {
    window.location.href = `/user/${auth.userId}/group/${id}`;
  }

  return (
    <React.Fragment>
      <CollectionCardWrapper
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
        borderRadius={borderRadius}
        margin={margin}
        padding={padding}
        bgColour={bgColour}
      >
        <CollectionCardOverlay style={hovered ? {} : { display: "none" }} onClick={redirectHandler}>
          <RedirectIcon className="fas fa-directions fa-5x"></RedirectIcon>
        </CollectionCardOverlay>
        <CollectionName txtColour={txtColour}>{name}</CollectionName>
        <CollectionIcon src={icon} alt="icon" />
      </CollectionCardWrapper>
    </React.Fragment>
  );
}
