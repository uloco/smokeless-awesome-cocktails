import styled from "styled-components";
import { Icon } from "./components/Icon";

const HomeScreen = styled.div`
  max-width: 400px;
  height: 614px;
  padding: 20px;
  background-color: #951a1a;
  display: flex;
  margin: 0 auto;
`;

const ButtonPrimary = styled.button`
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

const Ingredient = styled.div`
  padding-right: 40px;
  color: white;
  font-family: "Barlow Condensed";
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.88px;
  line-height: 18px;
  border-bottom: 1px solid white;
  flex-direction: row;
  max-width: 300px;
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
    </>
  );
};
