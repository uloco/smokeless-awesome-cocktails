import styled from "styled-components";
import { ButtonPrimary, ButtonSwitcher } from "./components/Button";
import { DrinkCanvas } from "./components/DrinkCanvas";
import { Ingredient } from "./components/Ingredient";
import { R3FExample } from "./R3FExample";
import ThreeExample from "./ThreeExample";

const HomeScreen = styled.div`
  max-width: 400px;
  height: 614px;
  padding: 20px;
  background-color: #66bbd9;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const Ingredients = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Drink = styled.div`
  margin-left: 10px;
  flex: 2;
  display: flex;
  flex-direction: column;
`;

const DrinkLayer = styled.div`
  margin-left: 10px;
  flex: 1;
  background-color: ${(props) => props.color};
`;

const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column-reverse;
  align-items: center;
`;

export const App = () => {
  return (
    <>
      <HomeScreen>
        <DrinkCanvas />
        <Header>
          <ButtonSwitcher />
        </Header>
        <Content>
          <Ingredients>
            <Ingredient>Orange Juice</Ingredient>
            <Ingredient>Tequila</Ingredient>
          </Ingredients>
          {/* <DrinkCanvas /> */}
          {/* <Drink>
            <DrinkLayer color="red" />
            <DrinkLayer color="orange" />
          </Drink> */}
        </Content>
        <ButtonContainer>
          <ButtonPrimary>Go</ButtonPrimary>
        </ButtonContainer>
      </HomeScreen>
    </>
  );
};
