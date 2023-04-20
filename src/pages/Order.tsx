import React, { FC, useState } from "react";
import styled from "styled-components";
import Back from "../assests/back.png";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import EmptyOrder from "../assests/orderAvatar.png";
import {
  placeCurrentOrder,
  setCurrentPage,
} from "../features/order/orderSlice";
import { useNavigate } from "react-router-dom";
import arrowDown from "../assests/arrowDown.png";
import veg from "../assests/veg.png";
import AddButton from "../components/AddButton";
import Forward from "../assests/forward.png";
import { setPath } from "../features/menu/menu.slice";

type props = {};

const Order: FC<props> = () => {
  const { placeOrder, prevOrder } = useSelector(
    (state: RootState) => state.order
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [active, setActive] = useState(true);
  const [prevactive, setPrevActive] = useState(true);

  const handleStart = () => {
    dispatch(setPath({ path: "Special", menu: [] }));
    dispatch(setCurrentPage("/home"));
    navigate("/home");
  };

  const totalItem = () => {
    const items = placeOrder
      .map((item) => item.qty)
      .reduce((prev, next) => prev + next);

    return `${items} item${items > 1 ? "s" : ""}`;
  };

  const PlaceOrder = () => {
    dispatch(setPath({ path: "Special", menu: [] }));
    dispatch(placeCurrentOrder(placeOrder));
    navigate("/home");
  };

  return (
    <MainContainer>
      <Header>
        <TopContainer>
          <IconButton pathname="/home" src={Back} />
          <TitleText>Place Order</TitleText>
        </TopContainer>
      </Header>

      {placeOrder.length < 1 ? (
        <EmptyContainer>
          <p style={{ color: "#BBBBBB", textAlign: "center" }}>
            No orders yet!
          </p>
          <p style={{ color: "#BBBBBB", textAlign: "center" }}>
            Add something from the menu.
          </p>

          <Button onClick={() => handleStart()}>START ORDERING</Button>
          <ImageContainer src={EmptyOrder} />
        </EmptyContainer>
      ) : (
        <>
          <MainOrderConatiner>
            <TitleDiv onClick={() => setActive(!active)}>
              <Title>{"Current Order"}</Title>
              <Line />
              <ArrowImage src={arrowDown} active={active} />
            </TitleDiv>
            {active && (
              <OrderContainer>
                {placeOrder.map((item) => {
                  return (
                    <ItemDiv>
                      <TypeImage src={veg} />
                      <PriceDiv>
                        <OrderTitle>{item.item_name}</OrderTitle>
                        <Price>{"$" + item.item_price}</Price>
                      </PriceDiv>
                      <div style={{ marginLeft: "auto", marginRight: 10 }}>
                        <AddButton
                          id={item.item_id}
                          image={item.item_image_url}
                          price={item.item_price}
                          title={item.item_name}
                        />
                      </div>
                    </ItemDiv>
                  );
                })}
                <InstructionText>Add cooking instruction</InstructionText>
              </OrderContainer>
            )}
            <TitleDiv onClick={() => setPrevActive(!prevactive)}>
              <Title>{"Previous orders"}</Title>
              <Line />
              <ArrowImage src={arrowDown} active={prevactive} />
            </TitleDiv>
            {prevOrder.length > 0 && prevactive && (
              <OrderContainer>
                {prevOrder.map((item) => {
                  return (
                    <ItemDiv>
                      <TypeImage src={veg} />
                      <PriceDiv>
                        <OrderTitle>{item.item_name}</OrderTitle>
                        <Price>{"$" + item.item_price}</Price>
                      </PriceDiv>
                      <div style={{ marginLeft: "auto", marginRight: 20 }}>
                        <Price style={{ fontWeight: "bolder", color: "black" }}>
                          {item.qty}
                        </Price>
                      </div>
                    </ItemDiv>
                  );
                })}
              </OrderContainer>
            )}
          </MainOrderConatiner>
          <ButtonDiv onClick={() => PlaceOrder()}>
            <Items>{totalItem()}</Items>
            <Place style={{ marginLeft: "auto" }}>{"PLACE ORDER"}</Place>
            <RightIconContainer>
              <RightIcon src={Forward} />
            </RightIconContainer>
          </ButtonDiv>
        </>
      )}
    </MainContainer>
  );
};

export default Order;

const ButtonDiv = styled.div`
  height: 5vh;
  width: 95%;
  background: linear-gradient(135deg, #459eaf 0%, #007991 100%);
  border-radius: 10px;
  align-self: center;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  padding: 5px;
`;

const Items = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  padding-left: 1rem;
  color: #ffffff;
`;
const Place = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  color: #ffffff;
  margin-right: 0.5rem;
`;

const RightIconContainer = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 1rem;
  box-shadow: inset 0px 0px 20px -14px;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RightIcon = styled.img`
  width: 1.5rem;
  color: white;
`;

const MainOrderConatiner = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 78vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const InstructionText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #76dfe6;
  text-decoration: underline;
  margin-top: 1rem;
`;

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  background-color: white;
  flex-direction: column;
  z-index: -1;
  padding-top: 1rem;
`;

const Header = styled.div`
  background-color: white;
  height: 8vh;
  border-radius: 0px 0px 10px 10px;
  width: 100%;
  --shadow1: 0 0 1px rgba(0, 0, 0, 0.1);
  --shadow2: 0 1px 2px rgba(0, 0, 0, 0.08);
  --shadow3: 0 5px 8px 1.2px rgba(0, 0, 0, 0.2);

  box-shadow: -1px -1px 3px #ffffff, 1.5px 1.5px 3px rgba(174, 174, 192, 0.4);
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-left: 1em;
  /* margin-top: 10px; */
  /* background-color: black; */
`;

const TitleText = styled.h3`
  margin-left: 8px;
  color: #4a5662;
  font-weight: 500;
  font-size: 3vh;
`;

const ImageContainer = styled.img`
  width: 60vh;
  height: 60vh;
  margin-top: auto;
`;

const EmptyContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  margin-top: 5rem;
`;

const Button = styled.button`
  background: linear-gradient(90deg, #97d8d8 0%, #5ad7df 100%, #17a2c0 100%);
  box-shadow: -4px 4px 8px rgba(215, 215, 215, 0.2),
    4px -4px 8px rgba(215, 215, 215, 0.2),
    -4px -4px 8px rgba(255, 255, 255, 0.9),
    4px 4px 10px rgba(215, 215, 215, 0.9);
  border-radius: 10px;
  width: 10rem;
  height: 3rem;
  border: none;
  margin-top: 2rem;
  color: white;
  font-size: 12px;
  font-weight: bold;
`;

const TitleDiv = styled.div`
  align-self: center;
  flex-direction: row;
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
  :hover {
    cursor: pointer;
  }

  :active {
    color: #3cbcb4;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
  }
`;
const Title = styled.p`
  color: #4a5662;
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
  :active {
    color: #3cbcb4;
  }
`;
const Line = styled.div`
  flex-grow: 1;
  height: 1.3px;
  background-color: #4a5662;
  color: #4a5662;
  opacity: 0.2;
  margin-left: 5px;
  margin-right: 5px;
`;

const ArrowImage = styled.img<{ active: boolean }>`
  width: 7px;
  height: 7px;
  -moz-transition: transform 0.5s;
  -webkit-transition: transform 0.5s;
  transition: transform 0.5s;
  margin-left: auto;
  transform: ${(props) => (props.active ? "rotate(0deg)" : "rotate(-180deg)")};
`;

const OrderContainer = styled.div`
  width: 87%;
  align-self: center;
  box-shadow: inset 5px 5px 15px 1px rgba(0, 0, 0, 0.08),
    inset -5px -5px 15px 1px rgba(0, 0, 0, 0.08);

  margin-top: 1rem;
  border-radius: 10px;
  padding: 10px 10px;
`;

const ItemDiv = styled.div`
  width: 100%;
  display: flex;
  height: 8vh;
  align-items: center;
  margin-top: 0.5rem;
`;

const PriceDiv = styled.div`
  justify-content: space-between;
  padding-left: 0.5rem;
  height: 6vh;
  display: flex;
  flex-direction: column;
`;
const OrderTitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #4a5662;
`;

const Price = styled.p`
  font-weight: bold;
  font-size: 12px;
  color: #727272;
`;

const TypeImage = styled.img`
  width: 1rem;
  height: 1rem;
`;
