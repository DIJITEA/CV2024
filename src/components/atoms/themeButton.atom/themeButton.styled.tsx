import styled, { css, keyframes } from "styled-components";
import {
  themeColor,
  themeColorReversed,
} from "../../../default/styledComponents";

const colorChange = keyframes`
  from {  
    background-color: #fc8eac;
  }
  50%{
    background-color: black;
  }
  100%{
    background-color: #fc8eac;
  }
`;

const roundDirection = (direction: boolean) => {
  const roundAnimation = keyframes`
  from {
    right: ${direction ? "2%" : "calc(98% - 39px)"};
    
  }
  50%{
    right: 2%;
    width: 90%;
  }
  100% {
    right: ${direction ? "calc(98% - 39px)" : "2%"};
    width:39px;
  }
`;

  const animationPlay = css`
    animation: ${roundAnimation} 400ms linear;
  `;

  return animationPlay;
};

const StyledHeaderButton = styled.button<{
  $animation?: boolean;
  $darkTheme?: boolean;
}>`
  position: relative;
  width: 150px;
  height: 50px;
  border-radius: 60px 60px 60px 60px / 60px 60px 60px 60px;
  background-color: ${themeColorReversed};
  border: 4px solid #818181;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
`;
const EmptyDiv = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 50%);
  ::before {
    content: "";
    position: absolute;
    top: -4px;
    right: 15%;
    height: 4px;
    width: 15%;
    background-color: ${themeColor};
    transition: right 1s;
  }
  ::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 15%;
    height: 4px;
    width: 15%;
    background-color: ${themeColor};
    transition: left 1s;
  }
  :hover::before {
    position: absolute;
    right: 70%;
  }
  :hover::after {
    position: absolute;
    left: 70%;
  }
`;

const StyledHeaderH2 = styled.div`
  position: absolute;
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 50%);

  font-family: Montserrat;
  font-size: 15px;
  font-weight: 500;
  line-height: 18.29px;
  text-align: center;
  color: ${themeColor};
  outline: none;
`;
const StyledRound = styled.div<{
  $animation?: boolean;
  $roundPosition?: boolean;
}>`
  position: absolute;
  bottom: 50%;
  right: ${(props) => (props.$roundPosition ? "2px" : "calc(98% - 39px)")};
  transform: translate(0%, 50%);

  height: 39px;
  width: 39px;
  border-radius: 50%;
  border-radius: 60px 60px 60px 60px / 60px 60px 60px 60px;
  background-color: ${themeColor};

  ${(props) =>
    props.$animation && !props.$roundPosition
      ? roundDirection(true)
      : roundDirection(false)};
`;
export { StyledHeaderButton, StyledHeaderH2, StyledRound, EmptyDiv };
