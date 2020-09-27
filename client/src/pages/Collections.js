// Libraries , css and static files
import React, { useContext } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

// Components and util
import AddCollection from "../components/AddCollection";
import CollectionCard from "../components/collection-card/CollectionCard";
import { device } from "../utils/globalCSS";
import { AuthContext } from "../utils/AuthContext";

const GroupsContentColumn = styled.div`
  width: 100%;
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const GroupList = styled.div`
  margin: 40px 0;
  width: 85%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media ${device.laptop} {
    width: 95%;
  }
`;

export default function Collections() {
  const [auth] = useContext(AuthContext);

  const content = (
    <GroupsContentColumn>
      <AddCollection />
      <GroupList>
        {auth.collections.map((collection) => {
          return <CollectionCard name={collection.name} icon={collection.icon} key={collection.id} id={collection.id} asRedirect />;
        })}
      </GroupList>
    </GroupsContentColumn>
  );

  return auth.isAuth ? content : <Redirect to="/" />;
}
