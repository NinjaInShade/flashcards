import styled from "styled-components";

export const CollectionCardWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;
  border-radius: 8px;
  box-sizing: content-box;
  padding: 30px 75px 30px 30px;
  margin: ${(props) => props.margin || "8px"};
  min-width: 200px;
  background-color: #fff;

  * {
    margin: 5px 0;
  }

  :hover {
    -webkit-box-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const CollectionName = styled.p`
  font-weight: 600;
  font-size: 26px;
`;

export const CollectionLead = styled.p`
  font-size: 20px;
  color: #8e8c8c;
`;
