import React, { Suspense } from "react";
import Routes from "routes";
import "./App.css";
import styled from "@emotion/styled/macro";
import GlobalNavBar from "components/organisms/GlobalNavBar";
import Footer from "components/organisms/Footer";
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header>
        <GlobalNavBar />
      </Header>
      <Routes />
      <Footer/>
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
