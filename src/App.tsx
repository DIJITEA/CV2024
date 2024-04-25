import { AppWrap, ContentWrap } from "./App.styled";
import ChangeThemeButton from "./components/atoms/themeButton.atom/themeButton";
import { ThemeProvider } from "styled-components";

import CustomButtonMolecule from "./components/molecules/CustomButton.molecule/CustomButton.molecule";
import { useAppDispatch, useAppSelector } from "./hooks";
import { ChangeLang, ChangeTheme } from "./store/actions/ThemeStorage";
import { useEffect } from "react";

function App() {
  const darkMode = useAppSelector((state) => state.ThemeS.darkMode);
  const lang = useAppSelector((state) => state.ThemeS.lang);
  const dispatch = useAppDispatch();

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

  return (
    <ThemeProvider theme={{ mode: `${darkMode ? "dark" : "light"}` }}>
      <AppWrap>
        {/* <CustomButtonMolecule /> */}
        <ChangeThemeButton
          buttonFunc={() => dispatch(ChangeTheme())}
          names={["dark", "light"]}
          roundPosition={darkMode}
        />
         <ChangeThemeButton
          buttonFunc={() => dispatch(ChangeLang())}
          names={["ru", "eng"]}
          roundPosition={lang}
        />
      </AppWrap>
    </ThemeProvider>
  );
}

export default App;
