// Libraries , css and static files
import React from "react";
import styled from "styled-components";

// Components and util
import { colours, typography } from "../../utils/globalCSS";

const ButtonUtil = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  text-align: center;
  display: block;
  font-family: ${typography.primaryFont};
  font-size: ${(props) => (props.large ? typography.h4 : typography.p)};
  color: #fff;
  min-width: 150px;
  padding: ${(props) => (props.small ? "10px 25px" : props.large ? "25px 70px" : "15px 30px")};
  transition: background-color 0.3s ease, color 0.3s ease;
  background-color: ${colours.primary400};

  :hover {
    background-color: ${colours.primary300};
  }

  :focus {
    border: 1px solid ${colours.neutral600};
  }

  :disabled {
    background-color: ${colours.neutral400};
    cursor: not-allowed;
  }
`;

const Primary = styled(ButtonUtil)`
  border-radius: 25px;

  :active {
    background-color: ${colours.primary200};
    border: none;
  }
`;

const Secondary = styled(ButtonUtil)`
  :active {
    background-color: ${colours.primary200};
    border: none;
  }
`;

const Tertiary = styled(ButtonUtil)`
  color: ${colours.primary300};
  background: none;
  border: 2px solid ${colours.primary300};

  :hover {
    color: ${colours.neutral100};
  }

  :focus {
    border: 2px solid ${colours.primary300};
  }

  :active {
    background-color: ${colours.primary200};
    border: none;
    color: ${colours.neutral100};
  }

  :disabled {
    color: ${colours.neutral400};
    border: 2px solid ${colours.netural400};
    background: none;
  }
`;

const Success = styled(ButtonUtil)`
  background-color: ${colours.success100};

  :hover {
    background-color: ${colours.success200};
  }
`;

const Warning = styled(ButtonUtil)`
  background-color: ${colours.error100};

  :hover {
    background-color: ${colours.error200};
  }
`;

const Error = styled(ButtonUtil)`
  background-color: ${colours.error100};

  :hover {
    background-color: ${colours.error200};
  }
`;

const components = {
  primary: Primary,
  secondary: Secondary,
  tertiary: Tertiary,
  success: Success,
  warning: Warning,
  error: Error,
};

export default function Button(props) {
  const { children, style, onClick, type = "secondary", disabled, small, large, icon } = props;
  const Component = components[type];

  return icon ? (
    <Secondary onClick={onClick} disabled={disabled} style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center", minWidth: "65px", height: "65px", padding: "0 15px" }}>
      <img src={icon} alt="icon" width="40px" height="40px" />
      {children && <p style={{ marginLeft: "10px", fontSize: `${typography.h5}` }}>{children}</p>}
    </Secondary>
  ) : (
    <Component onClick={onClick} disabled={disabled} small={small} large={large} style={style}>
      {children}
    </Component>
  );
}
