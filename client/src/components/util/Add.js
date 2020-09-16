// Libraries , css and static files
import React from "react";
import styled from "styled-components";

// Components and util
import { colours } from "../../utils/globalCSS";

const AddContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  border-radius: 15px;
  background-color: ${colours.primary200};
  cursor: pointer;
  padding: ${(props) => props.padding || "100px"};
  margin: ${(props) => props.margin || 0};

  :hover {
    background-color: #0d589e;
  }

  :hover * {
    color: ${colours.primary500};
  }
`;

const AddIcon = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 40%;
`;

const Icon = styled.i`
  color: ${colours.primary600};
`;

export default function Add({ onClick, padding, margin }) {
  return (
    <AddContainer padding={padding} onClick={onClick} margin={margin}>
      <AddIcon>
        <Icon className="fas fa-plus-circle fa-5x"></Icon>
      </AddIcon>
    </AddContainer>
  );
}
