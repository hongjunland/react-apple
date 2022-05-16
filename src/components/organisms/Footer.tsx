import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterTop>
          <FooterLogo />
          <FooterList>
            <FooterItem>
              <FooterItemLink to="">믿을 수 있는 중고거래</FooterItemLink>
            </FooterItem>
            <FooterItem>
              <FooterItemLink to="">자주 묻는 질문</FooterItemLink>
            </FooterItem>
          </FooterList>
          <FooterList>
            <FooterItem>
              <FooterItemLink to="">광고주센터</FooterItemLink>
            </FooterItem>
            <FooterItem>
              <FooterItemAnchor target="_blank" href="">
                당근페이
              </FooterItemAnchor>
            </FooterItem>
            <FooterItem>
              <FooterItemAnchor target="_blank" href="">
                동네가게
              </FooterItemAnchor>
            </FooterItem>
          </FooterList>
          <FooterList>
            <FooterItem>
              <FooterItemAnchor target="_blank" href="">
                회사 소개
              </FooterItemAnchor>
            </FooterItem>
            <FooterItem>
              <FooterItemAnchor target="_blank" href="">
                채용
              </FooterItemAnchor>
            </FooterItem>
          </FooterList>
          <FooterList>
            <FooterItem>
              <FooterItemAnchor target="_blank" href="">
                이용약관
              </FooterItemAnchor>
            </FooterItem>
            <FooterItem>
              <FooterItemAnchor target="_blank" href="">
                개인정보처리방침
              </FooterItemAnchor>
            </FooterItem>
            <FooterItem>
              <FooterItemAnchor target="_blank" href="">
                위치기반서비스 이용약관
              </FooterItemAnchor>
            </FooterItem>
          </FooterList>
        </FooterTop>
        <FooterBottom>
          <CopyRightArea>
            <CopyRightList>
              <CopyRightItem>
                고객문의 &nbsp;
                <a href="mailto:cs@daangnservice.com">cs@daangnservice.com</a>
              </CopyRightItem>
              <CopyRightItem>
                제휴문의 &nbsp;
                <a href="mailto:contact@daangn.com">contact@daangn.com</a>
              </CopyRightItem>
            </CopyRightList>
            <CopyRightList>
              <CopyRightItem>
                지역광고 &nbsp;
                <a href="mailto:ad@daangn.com">ad@daangn.com</a>
              </CopyRightItem>
              <CopyRightItem>
                PR문의 &nbsp;
                <a href="mailto:pr@daangn.com">pr@daangn.com</a>
              </CopyRightItem>
            </CopyRightList>
            <CopyRightList className="list-light">
              <CopyRightItem>
                <address>
                  서울특별시 구로구 디지털로30길 28, 609호 (당근서비스)
                </address>
              </CopyRightItem>
              <CopyRightItem>사업자 등록번호 : 375-87-00088</CopyRightItem>
              <CopyRightItem>
                직업정보제공사업 신고번호 : J1200020200016
              </CopyRightItem>
            </CopyRightList>
            <Social>
              <SocialList>
                <SocialItem>
                  <a target="_blank" href="https://www.facebook.com/daangn" rel="noreferrer">
                    <img
                      alt="facebook"
                      src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/footer/icon-facebook-0563f4a93852d073b41f13b8bcabb03d47af3bb3a6755cdfedd8a73686c7f18c.svg"
                    />
                  </a>
                </SocialItem>
                <SocialItem>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/daangnmarket/" rel="noreferrer"
                  >
                    <img
                      alt="instagram"
                      src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/footer/icon-instagram-2f6c88a461597907c114b7ce28eab053fcae791ed26417915fefb6f7c9f95756.svg"
                    />
                  </a>
                </SocialItem>
                <SocialItem>
                  <a target="_blank" href="https://blog.naver.com/daangn" rel="noreferrer">
                    <img
                      alt="blog"
                      src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/footer/icon-blog-e1b0d512d1766a6962ec5bbb5b0803d2a6a9c55ad97db5ba9eebb76013caceba.svg"
                    />
                  </a>
                </SocialItem>
                <SocialItem>
                  <img alt="country" src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/footer/icon-global-2f53678b428ec623cefd07a90dd7777f3e55fc0433918f645d7d75ace6ff1fc3.png" width="24" height="24"/>
                  <GlobalLinkSelect>
                    <option value="kr">한국</option>
                    <option value="https://uk.karrotmarket.com">영국</option>
                    <option value="https://ca.karrotmarket.com">캐나다</option>
                    <option value="https://us.karrotmarket.com">미국</option>
                    <option value="https://jp.karrotmarket.com">일본</option>
                  </GlobalLinkSelect>
                </SocialItem>
              </SocialList>
            </Social>
            <CopyRightText>©Danggeun Market Inc.</CopyRightText>
          </CopyRightArea>
        </FooterBottom>
      </FooterContainer>
    </StyledFooter>
  );
}
const StyledFooter = styled.footer`
  background-color: rgb(73, 80, 87);
  color: rgb(255, 255, 255);
  padding: 8rem 0px;
`;
const FooterContainer = styled.div`
  width: 1024px;
  margin: 0px auto;
`;
const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
`;
const FooterLogo = styled.div`
  width: 130px;
  height: 37px;
  background-image: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/base/footer/logo-a4f4848ffd1d5fcb13d1d3ecf82ffbc77c31ebe226f67097386497a34638c059.svg);
  background-size: 130px 37px;
`;
const FooterList = styled.ul`
  list-style-type: none;
`;
const FooterItem = styled.li`
  display: block;
  font-size: 1.6rem;
  margin-bottom: 1.6rem;
  a {
    text-decoration: none;
  }
`;
const FooterItemLink = styled(Link)`
  color: #fff;
  font-weight: 700;
`;
const FooterItemAnchor = styled.a`
  color: #adb5bd;
  text-decoration: none;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 3.2rem;
`;
const CopyRightArea = styled.div`
  color: #adb5bd;
  margin-top: 3.2rem;
  .list-light {
    margin-top: 1.6rem;
    color: #868e96;
  }
`;
const CopyRightList = styled.ul`
  list-style-type: none;
  margin-bottom: 0.4rem;
`;
const CopyRightItem = styled.li`
  display: inline-block;
  font-size: 1.4rem;
  margin: 0 0.8rem 0 0;
  a {
    text-decoration: none;
    color: #868e96;
  }
`;
const Social = styled.div`
  margin-top: 3.2rem;
  margin-bottom: 3.2rem;
`;
const SocialItem = styled.li`
  display: inline-block;
  margin: 0px;
  margin-right: 2.4rem;
`;
const SocialList = styled.ul`
  list-style-type: none;
  ${SocialItem}:last-child {
    padding-left: 26px;
    display: inline-block;
    margin: 0px;
  }
`;
const CopyRightText = styled.div`
  font-size: 1.4rem;
  margin: 0.4rem 0;
  color: #868e96;
`;
const GlobalLinkSelect = styled.select`
  margin-left: 6px;
  text-decoration: underline;
  text-underline-position: under;
  vertical-align: top;
  background: #495057;
  color: #ADB5BD;
  font-size: 16px;
  line-height: 24px;
  border: none;
  appearance: none;
`

export default Footer;
