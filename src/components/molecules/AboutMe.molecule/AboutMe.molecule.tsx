import { FC } from "react";
import P from "../../atoms/p.atom/p.atom";
import { AboutWrap, StyledImg, TextWrap } from "./AboutMe.styled";
import Portrait from "../../../assets/images/jpg/KotobukiTsumugi.jpg";

interface test {
  name: string;
}

const ruInfo = `Опытный Frontend-разработчик с опытом создания эффективных и инновационных
веб-приложений. Знание JavaScript, React и Git, сильные знания HTML5 и
CSS3. Подтвержденная способность эффективно сотрудничать с межфункциональными
командами для создания высококачественных продуктов. Я стремлюсь
быть в курсе новейших технологий и постоянно совершенствую свои навыки для
решения новых задач в динамичной области веб-разработки.`;

const engInfo = `Experienced Frontend Developer with experience creating efficient and innovative
web applications. Knowledge of JavaScript, React and Git, strong knowledge of HTML5 and
CSS3. Proven ability to collaborate effectively with cross-functional
teams to create high quality products. I aim to
keep abreast of the latest technologies and constantly improve my skills for
solving new problems in the dynamic field of web development.`;

const AboutMe: FC<test> = ({}) => {
  return (
    <AboutWrap>
      <StyledImg src={Portrait} alt="portrait" />
      <TextWrap>
        <P eng={engInfo} ru={ruInfo} />
      </TextWrap>
    </AboutWrap>
  );
};

export default AboutMe;
