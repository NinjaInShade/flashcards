// Libraries , css and static files
import React, { useState } from "react";
import styled from "styled-components";
import addIcon from "../../static/plus.svg";
import addIconActive from "../../static/plusActive.svg";

const AddContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  border-radius: 8px;
  background-color: #6a1b9a;
  cursor: pointer;
  padding: ${(props) => props.padding || "100px"};
`;

const AddIcon = styled.img`
  position: absolute;
  width: 40%;
  height: 40%;
`;

export default function Add(props) {
  const { onClick, padding } = props;

  const [active, setActive] = useState(false);
  const icon = active ? addIconActive : addIcon;

  return (
    <AddContainer style={active ? { backgroundColor: "#792ea8" } : {}} onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} padding={padding}>
      <AddIcon src={icon} alt="add icon" onClick={onClick} />
    </AddContainer>
  );
}
