import { FC, useState } from "react";
import styled from "styled-components";
import Resto from "../assests/resto.jpg";
import arrowDown from "../assests/arrowDown.png";
import SpecicalBox from "./SpecialBox";
import { SpecialMenu } from "../contants";
type props = {};

const Special: FC<props> = () => {
  const [active, setActive] = useState(true);

  return (
    <MainContainer>
      <DashImageConatiner>
        <Image src={Resto} />
      </DashImageConatiner>
      <TitleDiv onClick={() => setActive(!active)}>
        <Title>Today’s Special</Title>
        <Line />
        <ArrowImage src={arrowDown} active={active} />
      </TitleDiv>
      {active && (
        <CardDiv>
          {SpecialMenu.map((item) => {
            return (
              <SpecicalBox
                id={item.item_id}
                image={item.item_image_url || ""}
                price={item.item_price_details[0].item_base_price}
                title={item.item_name}
              />
            );
          })}
        </CardDiv>
      )}
    </MainContainer>
  );
};

export default Special;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-top: 3vh;
  height: 75vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const DashImageConatiner = styled.div`
  height: 15vh;
  width: 90%;
  padding: 1%;
  align-self: center;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 10px 20px, rgba(0, 0, 0, 0.1) 0px 6px 6px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const TitleDiv = styled.div`
  flex-direction: row;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 1rem;

  :hover {
    cursor: pointer;
  }

  :active {
    color: #3cbcb4;
  }
`;
const Title = styled.p`
  color: #4a5662;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 1rem;
  font-weight: bold;
  :active {
    color: #3cbcb4;
  }
`;
const Line = styled.div`
  width: 60%;
  height: 1.3px;
  background-color: #4a5662;
  color: #4a5662;
  opacity: 0.2;
`;

const ArrowImage = styled.img<{ active: boolean }>`
  width: 7px;
  height: 7px;
  -moz-transition: transform 0.5s;
  -webkit-transition: transform 0.5s;
  transition: transform 0.5s;

  transform: ${(props) => (props.active ? "rotate(0deg)" : "rotate(-180deg)")};
`;

const CardDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  width: 90%;
  align-self: center;
  height: 100%;
  grid-row-gap: 10px;
`;
