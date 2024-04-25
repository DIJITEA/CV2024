import styled from "styled-components";
import { themeColor } from "./default/styledComponents";

const AppWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${themeColor};
  min-height: 100vh;
`;
const ContentWrap = styled.div`
  display: flex;
  justify-content: center;
  /* padding-bottom: 149px; */
`;
export { AppWrap, ContentWrap };
