import styled from "styled-components";
import { themeColor } from "./default/styledComponents";

const AppWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${themeColor};
`;
const ContentWrap = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  min-height: 100vh;
`;

const PrintPath = styled.div`
  background-color: ${themeColor};
`;

export { AppWrap, ContentWrap, PrintPath };
