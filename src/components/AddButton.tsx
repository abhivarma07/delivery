import { FC } from "react";
import styled from "styled-components";
import Plus from "../assests/plus.png";
import Minus from "../assests/minus.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { itemDetail, manageItem } from "../features/order/orderSlice";

type props = {
  id?: string;
  image: string | undefined;
  price: number;
  title: string;
};

const AddButton: FC<props> = ({ id = "", title, image, price }) => {
  const { placeOrder } = useSelector((state: RootState) => state.order);
  const dispatch = useDispatch();

  const findItem = () => {
    return placeOrder.findIndex((item) => item.item_id === id);
  };

  const item: itemDetail = {
    item_id: id,
    item_name: title,
    item_image_url: image || "",
    item_price: price,
    item_type: "veg",
    qty: 1,
  };

  const AddButton = () => {
    dispatch(manageItem({ item: item, type: "add" }));
  };

  const HandleMinus = () => {
    dispatch(manageItem({ item: item, type: "rem" }));
  };

  return (
    <MainContainer>
      <IconContainer onClick={() => findItem() !== -1 && HandleMinus()}>
        <ImageContainer src={findItem() !== -1 ? Minus : Plus} />
      </IconContainer>
      <ADD onClick={() => findItem() === -1 && AddButton()}>
        {findItem() !== -1 ? placeOrder[findItem()].qty : "ADD"}
      </ADD>
      {findItem() !== -1 && (
        <IconContainer style={{ marginLeft: 10 }} onClick={() => AddButton()}>
          <ImageContainer src={Plus} />
        </IconContainer>
      )}
    </MainContainer>
  );
};

export default AddButton;

const MainContainer = styled.button`
  height: 30px;
  align-items: center;
  padding-left: 6px;
  padding-right: 6px;
  display: flex;
  flex-direction: row;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 10px;
  border: none;

  :active {
    box-shadow: none;
  }
`;

const IconContainer = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  display: flex;
  --box1: 6px 4px 10px rgba(0, 0, 0, 0.2);
  --box2: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  box-shadow: var(--box2);
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.img`
  object-fit: contain;
  width: 10px;
  height: 10px;
`;

const ADD = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  color: #4a5662;
  margin-left: 10px;
`;
