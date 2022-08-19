import { useState } from "react";
import styled from "styled-components";
import { Icon } from "./Icon";

export const ButtonPrimary = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  min-width: 200px;
  background-color: white;
  border-style: none;
  border-radius: 25px;
  font-family: "Barlow Condensed";
  font-size: 16px;
  letter-spacing: 1.01px;
  line-height: 19px;
  font-weight: 800;
  text-transform: uppercase;
  color: #890200;
`;

export const ButtonIcon = styled.button`
  width: 50px;
  height: 50px;
  background-color: #890300;
  cursor: pointer;
`;

export const ButtonSwitcher = () => {
  const [activeButton, setActiveButton] = useState<"shot" | "cocktail">(
    "cocktail"
  );

  return (
    <>
      <ButtonIcon onClick={() => setActiveButton("shot")}>
        <Icon iconName="shot" active={activeButton === "shot"} />
      </ButtonIcon>
      <ButtonIcon onClick={() => setActiveButton("cocktail")}>
        <Icon iconName="cocktail" active={activeButton === "cocktail"} />
      </ButtonIcon>
    </>
  );
};
