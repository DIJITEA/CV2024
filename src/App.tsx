import { AppWrap, ContentWrap, PrintPath } from "./App.styled";
import { ThemeProvider } from "styled-components";
import { useAppSelector } from "./hooks";
import { useEffect } from "react";
import HeaderMolecule from "./components/molecules/header.molecule/header.molecule";
import AboutMe from "./components/molecules/AboutMe.molecule/AboutMe.molecule";
import DownloadPDF from "./components/molecules/PDFRender.molecule/PDFRENDER.molecule";
import { usePDF } from "react-to-pdf";

function App() {
  const darkMode = useAppSelector((state) => state.ThemeS.darkMode);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme)").media !== "not all") {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        //  alert("Dark mode");
      }
    } else {
      // alert("Dark mode is not supported");
    }
  });
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  return (
    <ThemeProvider theme={{ mode: `${darkMode ? "dark" : "light"}` }}>
      <AppWrap>
        <ContentWrap>
          <HeaderMolecule />
          <PrintPath id="print" ref={targetRef}>
            <AboutMe name={""} />
          </PrintPath>
          {/* <CustomButtonMolecule /> */}
        </ContentWrap>
        <DownloadPDF />
        <button onClick={() => toPDF()}>Download PDF</button>
      </AppWrap>
    </ThemeProvider>
  );
}

export default App;
