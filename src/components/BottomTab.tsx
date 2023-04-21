import { FC, useEffect } from "react";
import styled from "styled-components";
import Thunder from "../assests/thunder.png";
import Book from "../assests/book.png";
import Order from "../assests/order.png";
import { useLocation } from "react-router-dom";
import IconButton from "./IconButton";

type props = {};

const BottomTab: FC<props> = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <MainContainer>
      <IconButton pathname="/events" src={Thunder} />
      <IconButton pathname="/home" src={Book} />
      <IconButton pathname="/order" src={Order} />
    </MainContainer>
  );
};

export default BottomTab;

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  flex-direction: row;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
