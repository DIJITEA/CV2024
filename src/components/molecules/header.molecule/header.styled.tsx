import styled, { css, keyframes } from "styled-components";
import LogoLight from "../../../assets/images/png/dijitB.png";
import LogoDark from "../../../assets/images/png/dijitW.png";

import {
  themeColor,
  themeColorReversed,
  themeLogo,
} from "../../../default/styledComponents";

const StyledHeaderWrap = styled.div`
  min-height: 90px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 3px solid ${themeColorReversed};
  ${themeLogo}
`;
const Logo = styled.div`
  width: 100px;
  height: 80px;
  ${themeLogo}
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
const ButtonsWrap = styled.div`
  max-width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
export { StyledHeaderWrap, Logo, ButtonsWrap };
