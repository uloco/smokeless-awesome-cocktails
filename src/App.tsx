import styled from "styled-components";

const HomeScreen = styled.div`
  max-width: 400px;
  height: 614px;
  padding: 20px;
  background-color: #951a1a;
  display: flex;
  margin: 0 auto;
`;

const Button = styled.button`
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

export const App = () => {
  return (
    <>
      <HomeScreen />
      <Button>Go</Button>
    </>
  );
};
