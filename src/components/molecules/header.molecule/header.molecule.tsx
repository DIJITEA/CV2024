import { useAppDispatch, useAppSelector } from "../../../hooks";
import { ChangeLang, ChangeTheme } from "../../../store/actions/ThemeStorage";
import ChangeThemeButton from "../../atoms/themeButton.atom/themeButton";
import { StyledHeaderWrap, Logo, ButtonsWrap } from "./header.styled";

const HeaderMolecule = () => {
  const darkMode = useAppSelector((state) => state.ThemeS.darkMode);
  const lang = useAppSelector((state) => state.ThemeS.lang);
  const dispatch = useAppDispatch();
  return (
    <StyledHeaderWrap>
      <Logo/>
      <ButtonsWrap> 
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
      </ButtonsWrap>
    </StyledHeaderWrap>
  );
};

export default HeaderMolecule;
