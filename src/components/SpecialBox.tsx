import { FC } from "react";
import styled from "styled-components";
import AddButton from "./AddButton";

type props = {
  image: string | undefined;
  price: number;
  title: string;
  id: string;
};

const SpecicalBox: FC<props> = ({ image, price, title, id }) => {
  return (
    <MainContainer>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <Details>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            paddingLeft: 10,
            marginTop: 5,
          }}
        >
          <img
            src={require("../assests/veg.png")}
            style={{ width: 15, height: 15 }}
          />
          <Title>{title}</Title>
        </div>
        <PriceDiv>
          <Price>{"$" + price}</Price>
          <div style={{ marginLeft: "auto", marginRight: 10 }}>
            <AddButton id={id} image={image} price={price} title={title} />
          </div>
        </PriceDiv>
      </Details>
    </MainContainer>
  );
};

export default SpecicalBox;

const MainContainer = styled.div`
  width: 96%;
  height: 26vh;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-flow: column;
  border-radius: 10px;
  place-self: center;
`;

const ImageContainer = styled.div`
  height: 60%;
  background-color: black;
  border-radius: 10px 10px 0 0;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 0 0;
  object-fit: fill;
`;

const Details = styled.div`
  display: flex;
  width: 100%;
  height: 40%;
  margin-top: auto;
  border-radius: 0 0 10px 10px;
  flex-direction: column;
  box-shadow: rgba(50, 50, 93, 0.1) 0px 10px 10px -8px inset,
    rgba(0, 0, 0, 0.2) 0px 16px 32px -10px inset;
`;

const Title = styled.p`
  font-size: 14px;
  color: #4a5662;
  font-weight: 500;
  margin-left: 5px;
`;

const PriceDiv = styled.div`
  display: flex;
  padding-left: 10px;
  align-items: center;
  margin-top: auto;
  margin-bottom: 0.5rem;
`;

const Price = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  color: #4a5662;
`;
