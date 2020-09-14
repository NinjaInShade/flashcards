// BREAKPOINTS
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};

export const colours = {
  primary100: "#275E69",
  primary200: "#197AD3",
  primary300: "#13A0BD",
  primary400: "#09B5D7",
  primary500: "#94E3F2",
  primary600: "#C7F4FC",

  success100: "#529E66",
  success200: "#367B48",
  success300: "#276738",

  warning100: "#E1C542",
  warning200: "#CAB23F",
  warning300: "#B49E35",

  error100: "#D0454C",
  error200: "#B54248",
  error300: "#95353A",

  neutral100: "#ffffff",
  neutral200: "#F4F5F7",
  neutral300: "#E1E1E1",
  neutral400: "#737581",
  neutral500: "#4A4B53",
  neutral600: "#000000",
};

export const typography = {
  primaryFont: '"Roboto", sans-serif',
  secondaryFont: '"Roboto Mono", monospace',
  h1: "1.8rem",
  h2: "1.6rem",
  h3: "1.4rem",
  h4: "1.2rem",
  h5: "1.1rem",
  p: "1rem",
  helper: "0.8rem",
  copyright: "0.7rem",
};
