import styled from "styled-components";
import { ButtonPrimary, ButtonSwitcher } from "./components/Button";
import { Icon } from "./components/Icon";
import { Ingredient } from "./components/Ingredient";

const HomeScreen = styled.div`
  max-width: 400px;
  height: 614px;
  padding: 20px;
  background-color: #951a1a;
  display: flex;
  margin: 0 auto;
`;

export const App = () => {
  return (
    <>
      <HomeScreen />
      <ButtonPrimary>Go</ButtonPrimary>
      <Ingredient>IIngredientIngredientngredient</Ingredient>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Ingredient>IIngredientIngredientngredient</Ingredient>
        <div style={{ width: 10 }}></div>
        <Ingredient>Ingredient</Ingredient>
        <div style={{ width: 10 }}></div>
        <Ingredient>Ingredient</Ingredient>
      </div>
      <Icon iconName="shot" />
      <Icon iconName="cocktail" />
      <ButtonSwitcher />
    </>
  );
};
