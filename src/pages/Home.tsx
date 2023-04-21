import { FC } from "react";
import styled from "styled-components";
import dp from "../assests/dp.png";
import IconButton from "../components/IconButton";
import person from "../assests/user.png";
import hash from "../assests/hastag.png";
import Special from "../components/Specical";
import MenuTab from "../components/MenuTab";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { bev, desert, food } from "../contants";
import { setPath } from "../features/menu/menu.slice";

type props = {};

const Home: FC<props> = () => {
  const { path } = useSelector((state: RootState) => state.menu);
  const dispatch = useDispatch();

  const handleTabPress = (
    tab: "Special" | "Food" | "Deserts" | "Beverages"
  ) => {
    let pathName = tab;
    let menu;

    if (tab === "Special") {
      menu = [];
    } else if (tab === "Food") {
      menu = food;
    } else if (tab === "Beverages") {
      menu = bev;
    } else {
      menu = desert;
    }
    dispatch(setPath({ path: pathName, menu: menu }));
  };

  return (
    <MainContainer>
      <Header>
        <TopContainer>
          <ImageContainer src={dp} />
          <TitleText>Sacred Earth Cafe</TitleText>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              justifyContent: "space-between",
              width: 70,
            }}
          >
            <IconButton pathname="" src={person} />
            <IconButton pathname="" src={hash} />
          </div>
        </TopContainer>
        <TabContainer>
          <TableTitleDiv onClick={() => handleTabPress("Special")}>
            <TabTitles active={path === "Special"}>Special</TabTitles>
            {path === "Special" && <Line />}
          </TableTitleDiv>
          <TableTitleDiv onClick={() => handleTabPress("Food")}>
            <TabTitles active={path === "Food"}>Food</TabTitles>
            {path === "Food" && <Line />}
          </TableTitleDiv>
          <TableTitleDiv onClick={() => handleTabPress("Deserts")}>
            <TabTitles active={path === "Deserts"}>Deserts</TabTitles>
            {path === "Deserts" && <Line />}
          </TableTitleDiv>
          <TableTitleDiv onClick={() => handleTabPress("Beverages")}>
            <TabTitles active={path === "Beverages"}>Beverages</TabTitles>
            {path === "Beverages" && <Line />}
          </TableTitleDiv>
        </TabContainer>
      </Header>
      {path === "Special" ? <Special /> : <MenuTab />}
    </MainContainer>
  );
};

export default Home;

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  background-color: white;
  flex-direction: column;
  z-index: -1;
`;

const Header = styled.div`
  background-color: white;
  height: 13.8vh;
  border-radius: 0px 0px 10px 10px;
  width: 100%;
  --shadow1: 0 0 1px rgba(0, 0, 0, 0.1);
  --shadow2: 0 1px 2px rgba(0, 0, 0, 0.08);
  --shadow3: 0 5px 8px 1.2px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  box-shadow: -1px -1px 3px #ffffff, 1.5px 1.5px 3px rgba(174, 174, 192, 0.4);
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  align-items: center;
  padding-left: 1em;
  margin-top: 10px;

  /* background-color: black; */
`;

const TitleText = styled.h3`
  margin-left: 8px;
  color: #4a5662;
  font-weight: bold;
  font-size: 2.2vh;
`;

const ImageContainer = styled.img`
  width: 5vh;
  height: 5vh;
  border-radius: 2.5vh;
`;

const TabContainer = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  flex-direction: row;
  scroll-behavior: smooth;
  overflow-x: scroll;
  justify-content: space-around;
  margin-top: auto;

  ::-webkit-scrollbar {
    display: none;
  }
  :hover {
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
  }
`;

const TableTitleDiv = styled.div`
  text-align: center;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2px;
`;

const TabTitles = styled.p<{ active: boolean }>`
  color: ${(p) => (p.active ? "#3CBCB4" : "rgba(74, 86, 98, 0.4)")};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  font-family: sans-serif;
  margin-top: auto;
  margin-bottom: 8px;
`;

const Line = styled.div`
  width: 100%;
  background-color: #3cbcb4;
  height: 2.2px;
  border-radius: 20px;
`;
