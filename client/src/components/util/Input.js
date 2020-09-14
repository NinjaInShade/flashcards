// Libraries , css and static files
import React from "react";
import styled from "styled-components";

// Components and util
import { colours, typography } from "../../utils/globalCSS";

const Container = styled.div`
  width: ${(props) => props.width || "75%"};
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: ${(props) => props.margin};
`;

const Label = styled.label`
  font-family: ${typography.secondaryFont};
  font-size: ${typography.p};
  margin-bottom: 6px;
`;

const InputField = styled.input`
  outline: none;
  border: none;
  font-family: ${typography.secondaryFont};
  font-size: ${typography.p};
  background-color: ${colours.neutral300};
  width: 100%;
  padding: 15px 10px;
`;

const ErrorText = styled.p`
  font-family: ${typography.secondaryFont};
  font-size: ${typography.p};
  color: ${colours.error100};
  margin-top: 2px;
`;

export default function Input(props) {
  const { label, maxLength, password, width, margin, value, onChange, error } = props;

  return (
    <Container width={width} margin={margin}>
      <Label style={{ color: error.filter((error) => error !== undefined && error !== "").length > 0 ? colours.error100 : colours.neutral500 }}>{label}</Label>
      <InputField type={password ? "password" : "text"} maxLength={maxLength} onChange={onChange} value={value} />
      <ErrorText>{error.map((error) => error)}</ErrorText>
    </Container>
  );
}
