import { FC, useState, useEffect } from "react";
import styled from "styled-components";
import Thunder from "../assests/thunder.png";
import Book from "../assests/book.png";
import Order from "../assests/order.png";
import { useNavigate, useLocation } from "react-router-dom";
import IconButton from "./IconButton";

type props = {};

const BottomTab: FC<props> = () => {
  const [click, setClick] = useState(false);

  const navigate = useNavigate();
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

type IconProps = {
  clicked: boolean;
};

const IconContainer = styled.div<IconProps>`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  --box1: 6px 4px 10px rgba(0, 0, 0, 0.2);
  --box2: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  box-shadow: ${(p) => (!p.clicked ? "var(--box1)" : " var(--box2)")};
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.img`
  object-fit: contain;
  width: 15px;
  height: 15px;
`;
