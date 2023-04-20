import React, { FC } from "react";
import styled from "styled-components";
import BottomTab from "../components/BottomTab";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../features/order/orderSlice";

type props = { pathname: string; src: string | undefined };

const IconButton: FC<props> = ({ pathname, src }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = () => {
    dispatch(setCurrentPage(pathname));
    navigate(pathname);
  };

  return (
    <IconContainer
      onClick={() => {
        handleNavigate();
      }}
      active={location.pathname === pathname}
    >
      <ImageContainer src={src} />
    </IconContainer>
  );
};

export default IconButton;

type IconProps = {
  active: boolean;
};

const IconContainer = styled.div<IconProps>`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  --box1: 6px 4px 10px rgba(0, 0, 0, 0.2);
  --box2: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  box-shadow: ${(p) => (!p.active ? "var(--box1)" : " var(--box2)")};
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.img`
  object-fit: contain;
  width: 15px;
  height: 15px;
`;
