import { FC } from "react";
import styled from "styled-components";
import Empty from "../assests/events.png";

type props = {};

const Events: FC<props> = () => {
  return (
    <MainContainer>
      <Header>
        <TopContainer>
          <TitleText>Events</TitleText>
        </TopContainer>
      </Header>
      <ImageContainer>
        <Image src={Empty} />
        <p style={{ color: "#BBBBBB" }}>Oh oh! No events for now.</p>
      </ImageContainer>
    </MainContainer>
  );
};

export default Events;

const Header = styled.div`
  background-color: white;
  height: 15vh;
  border-radius: 0px 0px 10px 10px;
  width: 100%;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-left: 1em;
  margin-top: 10px;
  /* background-color: black; */
`;

const TitleText = styled.h3`
  margin-left: 8px;
  color: #4a5662;
  font-weight: 600;
  font-size: 3vh;
`;

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  background-color: white;
  flex-direction: column;
  z-index: -1;
`;

const ImageContainer = styled.div`
  align-self: center;
  flex: 1;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
const Image = styled.img`
  object-fit: contain;
  width: 45vh;
  height: 45vh;
`;
