// Libraries , css and static files
import React, { useContext, useState } from "react";
import styled from "styled-components";

// Components and util
import { AuthContext } from "../utils/AuthContext";
import DonutChart from "../components/util/DonutChart";
import { colours, device, typography } from "../utils/globalCSS";

const Column = styled.div`
  width: 800px;
  padding: 25px 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media ${device.laptopL} {
    max-width: 90%;
  }
`;

const HeadingRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`;

const Username = styled.h1`
  padding-left: 20px;
  padding-top: 8px;
  font-size: ${typography.bigH};
`;

const HR = styled.hr`
  margin: 30px 0;
  width: 100%;
  border: 1px solid black;
`;

const StatsRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 450px) {
    margin-bottom: 40px;
  }
`;

const StatsHeading = styled.h2`
  font-size: ${typography.bigH};
  margin-bottom: 30px;
`;

export default function AuthHome(props) {
  const [auth] = useContext(AuthContext);
  // eslint-disable-next-line
  const [values, setValues] = useState({
    groups: {
      value: 17,
      max: auth.supporter ? 20 : 10,
    },
    flashcards: {
      value: 14,
      max: auth.supporter ? 50 : 20,
    },
  });

  const content = (
    <Column>
      <HeadingRow>
        <i className="fas fa-database fa-3x" style={{ color: `${colours.neutral600}` }}></i>
        <Username>{auth.username}</Username>
      </HeadingRow>
      <HR />
      <StatsRow>
        <StatsContainer>
          <StatsHeading>Collections</StatsHeading>
          <DonutChart size="150" strokewidth="25" value={`${(values.groups.value / values.groups.max) * 100}`} valuelabel={`${values.groups.value}/${values.groups.max}`} />
        </StatsContainer>
        <StatsContainer>
          <StatsHeading>Flashcards</StatsHeading>
          <DonutChart size="150" strokewidth="25" value={`${(values.flashcards.value / values.flashcards.max) * 100}`} valuelabel={`${values.flashcards.value}/${values.flashcards.max}`} />
        </StatsContainer>
      </StatsRow>
    </Column>
  );
  return content;
}
