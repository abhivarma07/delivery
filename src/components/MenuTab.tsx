import { FC, useState } from "react";
import styled from "styled-components";
import arrowDown from "../assests/arrowDown.png";
import AddButton from "./AddButton";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

type props = {};

const MenuTab: FC<props> = () => {
  const { foodContent } = useSelector((state: RootState) => state.menu);

  const [active, setActive] = useState(true);

  return (
    <MainContainer>
      {foodContent &&
        Object.keys(foodContent).map((key, index) => {
          return (
            <>
              <TitleDiv onClick={() => setActive(!active)}>
                <Title>{key}</Title>
                <Line />
                <ArrowImage src={arrowDown} active={active} />
              </TitleDiv>
              {active &&
                foodContent[key].map((item: any) => {
                  return (
                    <ItemCard>
                      {item.item_image_url && (
                        <ImageContainer>
                          <Image src={item.item_image_url} />
                        </ImageContainer>
                      )}
                      <DescDiv>
                        <ItemTitle>{item.item_name}</ItemTitle>
                        <PriceDiv>
                          <Price>
                            {"$" + item.item_price_details[0].item_base_price}
                          </Price>
                          <div style={{ marginLeft: "auto", marginRight: 10 }}>
                            <AddButton
                              id={item.item_id}
                              image={item.item_image_url}
                              price={item.item_price_details[0].item_base_price}
                              title={item.item_name}
                            />
                          </div>
                        </PriceDiv>
                      </DescDiv>
                    </ItemCard>
                  );
                })}
            </>
          );
        })}
    </MainContainer>
  );
};

export default MenuTab;
const MainContainer = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 75vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
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

const ItemCard = styled.div`
  align-self: center;
  display: flex;
  height: 12vh;
  width: 88%;
  box-shadow: inset 4px 10px 24px 0px rgba(0, 0, 0, 0.1);
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
`;

const ImageContainer = styled.div`
  height: 7vh;
  width: 7vh;
  border-radius: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const DescDiv = styled.div`
  height: 7vh;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 10px;
`;

const PriceDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Price = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  color: #4a5662;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif,
    Helvetica, sans-serif;
`;

const ItemTitle = styled.p`
  color: #4a5662;
  font-size: 16px;
  font-weight: bold;
`;
