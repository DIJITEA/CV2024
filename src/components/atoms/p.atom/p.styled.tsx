import styled, { css, keyframes } from "styled-components";
import LogoLight from "../../../assets/images/png/dijitB.png";
import LogoDark from "../../../assets/images/png/dijitW.png";

import {
  themeColor,
  themeColorReversed,
  themeLogo,
} from "../../../default/styledComponents";

const StyledP = styled.p`
  font-family: Montserrat;
  font-size: 80%;
  font-weight: 500;
  line-height: 18.29px;
  color: ${themeColorReversed};
`;

export { StyledP };
