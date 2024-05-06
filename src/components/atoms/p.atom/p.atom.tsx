import { FC } from "react";
import { useAppSelector } from "../../../hooks";
import { StyledP } from "./p.styled";

interface Pprops {
  eng: string;
  ru: string;
}

const P: FC<Pprops> = ({ eng, ru }) => {
  const lang = useAppSelector((state) => state.ThemeS.lang);
  return <StyledP>{lang ? ru : eng}</StyledP>;
};

export default P;
