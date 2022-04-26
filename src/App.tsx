import React, { Suspense } from "react";
import Routes from "routes";
import "./App.css";
import styled from "@emotion/styled";
import GlobalNavBar from "components/organisms/GlobalNavBar";
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header>
        <GlobalNavBar />
      </Header>
      <Routes />
    </Suspense>
  );
}

const Header = styled.header`
  width: 100%;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  position: sticky;
  top: 0px;
  z-index: 1;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
`;
export default App;
