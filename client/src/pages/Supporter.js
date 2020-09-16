// Libraries , css and static files
import React, { useState } from "react";
import styled from "styled-components";
import notFound from "../static/supporter.svg";

const Row = styled.div`
  width: 100%;
  padding: 0 25px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin: auto;
  display: block;
  margin-top: 100px;
`;

export default function Supporter() {
  // eslint-disable-next-line
  const [donateAmount, setDonateAmount] = useState("£");

  // eslint-disable-next-line
  function changeHandler(e) {
    if (e.target.value[0] !== "£") {
      setDonateAmount("£");
      return;
    }

    if (/^\d+$/.test(e.target.value.substring(1)) === false) {
      if (e.target.value.substring(1) === "") {
        setDonateAmount(e.target.value);
        return;
      }

      return;
    }
    setDonateAmount(e.target.value);
  }

  return (
    <React.Fragment>
      <Row>
        <Image src={notFound} alt="Not found 404 / Coming soon" />
      </Row>
    </React.Fragment>
  );
}
