import { useAppDispatch, useAppSelector } from "../../../hooks";
import { ChangeTheme } from "../../../store/actions/ThemeStorage";
import {
  EmptyDiv,
  StyledHeaderButton,
  StyledHeaderH2,
  StyledRound,
} from "./themeButton.styled";
import { FC, useEffect, useState } from "react";
import sound from "../../../assets/sounds/click.mp3";
import { time } from "console";

interface ButtonProps {
  buttonFunc: () => {};
  names: [string, string];
  roundPosition: boolean;
  // name2: string;
}

const ChangeThemeButton: FC<ButtonProps> = ({
  buttonFunc,
  names,
  roundPosition,
}) => {
  const [animationPlay, setAnimationPlay] = useState(false);
  const [name, setName] = useState(names[0]);

  setTimeout(() => {
    if (roundPosition) {
      setName(names[0]);
    } else {
      setName(names[1]);
    }
  }, 150);

  return (
    <StyledHeaderButton
      // $animation={animationPlay}
      onClick={() => {
        buttonFunc();
        setAnimationPlay(!animationPlay);
      }}
    >
      <StyledHeaderH2>{name}</StyledHeaderH2>
      <StyledRound
        $animation={animationPlay}
        $roundPosition={roundPosition}
      ></StyledRound>

      {/* :: before / after gets attached to empty div */}
      <EmptyDiv>
        <EmptyDiv></EmptyDiv>
      </EmptyDiv>
      {/* ---------------------------------------------*/}
    </StyledHeaderButton>
  );
};
export default ChangeThemeButton;
