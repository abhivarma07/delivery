import { FC } from "react";
import styled from "styled-components";

type props = { icons: any };

const Icons: FC<props> = () => {
  return <MainContainer>BottomTab</MainContainer>;
};

export default Icons;

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  flex-direction: row;
  display: flex;
  justify-content: space-evenly;

  border-style: solid;
  border-width: 0px;
  border-top-width: 1px;
  border-color: #e5e4e2;
`;
