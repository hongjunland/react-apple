import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

function GlobalNavBar() {
  return (
    <MainWarp>
      <LogoLink to="/">
        <LogoImage
          alt="당근마켓"
          src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/logo-basic-24b18257ac4ef693c02233bf21e9cb7ecbf43ebd8d5b40c24d99e14094a44c81.svg"
          width="120"
          height="34"
        />
      </LogoLink>
      <SearchBarSection>
        <SearchInputWrap>
          <SearchInput
            type="text"
            placeholder="동네 이름, 물품명 등을 검색해보세요!"
          />
          <SearchButton>
            <img
              alt="Search"
              src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/search-icon-7008edd4f9aaa32188f55e65258f1c1905d7a9d1a3ca2a07ae809b5535380f14.svg"
              width="24"
              height="24"
            />
          </SearchButton>
        </SearchInputWrap>
      </SearchBarSection>
      <MenuBarSection>
        <DownloadWrapper>
          <MenuCheckBox type="checkbox" />
          <MenuCheckBoxLabel>
            다운로드
            <MenuIconSvg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L6 6L11 1"
                stroke="#4D5159"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </MenuIconSvg>
          </MenuCheckBoxLabel>
          <MenuList>
            <li>
              <MenuAnchor>
                <img
                  alt="App Store"
                  src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/apple-store-3a664174124650d63cae365bc55586fc5ff27b822b1b97788fc4af77d73d00c8.svg"
                  width="15"
                  height="18"
                />
                <span>App Store</span>
              </MenuAnchor>
            </li>
            <li>
              <MenuAnchor>
                <img
                  alt="Google Play"
                  src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/google-play-c9ad0fc573cd01e2b982df5de6709a3d8d7cec8d9b58a5c08db7da0b92a32a75.svg"
                  width="15"
                  height="18"
                />
                <span>Google Play</span>
              </MenuAnchor>
            </li>
          </MenuList>
        </DownloadWrapper>
        <a>
          <ChatButton>
            <ChatText>당근채팅</ChatText>
            <ChatBetaText>Beta</ChatBetaText>
          </ChatButton>
        </a>
      </MenuBarSection>
    </MainWarp>
  );
}

const MainWarp = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1024px;
  margin: 0px auto;
  padding: 16px 0px;
`;
const LogoLink = styled(Link)`
  display: inline-block;
  margin-right: 32px;
`;
const LogoImage = styled.img`
  width: 120px;
  margin-bottom: 5px;
  vertical-align: text-bottom;
`;
const SearchBarSection = styled.section`
  flex: 1 1 0%;
`;
const SearchInputWrap = styled.div`
  display: flex;
  max-width: 400px;
  height: 40px;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0px 1.6rem;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(233, 236, 239);
  border-image: initial;
  text-decoration: none;
`;
const SearchInput = styled.input`
  display: block;
  width: 100%;
  font-size: 16px;
  color: rgb(33, 37, 41);
  background-color: transparent;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  padding: 0px;
  margin: 0px;
`;
const SearchButton = styled.button`
  border: none;
  margin: 0;
  background-color: transparent;
  margin: 0px;
  img {
    width: 19px;
    height: 19px;
    fill: #868e96;
  }
`;
const MenuBarSection = styled.section`
  display: flex;
  font-family: "Noto Sans KR";
  color: rgb(77, 81, 89);
`;
const DownloadWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 10px;
`;
const MenuCheckBox = styled.input`
  display: none;
`;
const MenuCheckBoxLabel = styled.label`
  display: inline-flex;
  width: 120px;
  height: 40px;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: -0.02em;
  cursor: pointer;
`;
const MenuIconSvg = styled.svg`
  margin-left: 9px;
  margin-top: -3px;
`;
const MenuList = styled.li`
  display: block;
  opacity: 1;
  z-index: 1;
  list-style-type: none;
  display: none;
  position: absolute;
  width: 200px;
  height: 114px;
  top: 46px;
  right: 0;
  border: 1px solid #868b94;
  padding: 24px;
  background: #f8f9fa;
  box-sizing: border-box;
  border-radius: 6px;
  opacity: 0;
  transition: opacity 0.5s;
  li {
    margin: 0;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: -0.02em;
  }
  li ~ li {
    margin-top: 24px;
  }
`;
const MenuAnchor = styled.a`
  display: block;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: -0.02em;
  text-decoration: none;
  color: #4d5159;
  cursor: pointer;
  img {
    vertical-align: middle;
  }
  span {
    margin-left: 8px;
    vertical-align: text-top;
  }
`;

const ChatButton = styled.button`
  margin: 0;
  width: 120px;
  height: 40px;
  border: 1px solid #d1d3d8;
  box-sizing: border-box;
  border-radius: 6px;
  font-size: 0;
  background-color: #fff;
  span{
    font-style: normal;
    font-weight: bold;
    vertical-align: middle;
  }
`;
const ChatText = styled.span`
  color: #4D5159;
  font-size: 16px;
`
const ChatBetaText = styled.span`
  margin-top: 1px;
  margin-left: 2px;
  font-family: Roboto;
  font-size: 14px;
  color: #FF7E36;
`
export default GlobalNavBar;
