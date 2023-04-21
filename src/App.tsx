import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import styled from "styled-components";
import BottomTab from "./components/BottomTab";
import Events from "./pages/Events";
import Order from "./pages/Order";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";

function App() {
  const { currentPage } = useSelector((state: RootState) => state.order);

  return (
    <MainContainer>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/order" element={<Order />} />
        </Routes>
        {currentPage !== "/order" && (
          <BottomContainer>
            <BottomTab />
          </BottomContainer>
        )}
      </Router>
    </MainContainer>
  );
}

export default App;

const BottomContainer = styled.div`
  width: 100%;
  height: 8vh;
  background-color: white;
  position: absolute;
  bottom: 0;
  /* z-index: 10; */
`;

const MainContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 768px;
  background-color: white;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  width: 100%;
`;
