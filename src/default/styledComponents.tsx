import styled from "styled-components";
import theme from "styled-theming";

export const themeColor = theme("mode", {
  light: "#eaeaea",
  dark: "#393939",
});

export const themeColorReversed = theme("mode", {
    light: "#393939",
    dark: "#eaeaea",
  });

