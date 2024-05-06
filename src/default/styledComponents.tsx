import styled from "styled-components";
import theme from "styled-theming";
import LogoLight from "../assets/images/png/dijitB.png";
import LogoDark from "../assets/images/png/dijitW.png";

export const themeColor = theme("mode", {
  light: "#eaeaea",
  dark: "#393939",
});

export const themeColorReversed = theme("mode", {
  light: "#393939",
  dark: "#eaeaea",
});

export const themeLogo = theme("mode", {
  light: `
  background-image: url(${LogoLight});`,
  dark: `
  background-image: url(${LogoDark});`,
});
