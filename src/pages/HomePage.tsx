import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <HomeMainSectionTop>
        <HomeMainTop>
          <div>
            <HomeMainTitle>
              당신 근처의
              <br />
              당근마켓
            </HomeMainTitle>
            <MainText>
              중고 거래부터 동네 정보까지, 이웃과 함께해요.
              <br />
              가깝고 따뜻한 당신의 근처를 만들어요.
            </MainText>
          </div>
          <HomeMainImageTop>
            <img
              srcSet="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-top-d6869a79bc4cb58ea59aa5a408decfdf4a4ba60ac639837081da12861083cdbb.webp "
              alt="중고거래, 동네생활 질문글과 동네가게"
              src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-top-68ba12f0da7b5af9a574ed92ca8b3a9c0068db176b566dd374ee50359693358b.png"
            />
          </HomeMainImageTop>
        </HomeMainTop>
      </HomeMainSectionTop>

      <HomeMainSection>
        <HomeMainContent>
          <HomeMainImage>
            <img
              srcSet="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-1-cc678e9a217b96f5cb459f7f0684f5ba67706f9889801618b8cf879fbc2c0ea7.webp "
              alt="우리동네 중고 직거래 사진"
              src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-1-39ac203e8922f615aa3843337871cb654b81269e872494128bf08236157c5f6a.png"
            />
          </HomeMainImage>
          <div>
            <HomeMainTitle>
              우리 동네
              <br />
              중고 직거래 마켓
            </HomeMainTitle>
            <MainText>
              동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.
            </MainText>
            <HomeButtons>
              <Link to="/" className="home-button text-l text-bold">
                인기매물 보기
              </Link>
              <Link to="/" className="home-button text-l text-bold ml-3">
                믿을 수 있는 중고거래
              </Link>
            </HomeButtons>
          </div>
        </HomeMainContent>
      </HomeMainSection>
      <HomeMainGreenSection>
        <HomeMainReverseContent>
          <HomeMainImage02>
            <img
              srcSet="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-2-91a2286453bdf82dea16a7f0ee4ceb9dd325eae0e5a2a9967ba72c344bf8f2fc.webp "
              loading="lazy"
              alt="이웃과 함께하는 동네생활"
              src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-2-f286322ab98acedf914a05bf77e84c67dcb897c8ccb543e66f6afea9d366d06d.png"
            />
          </HomeMainImage02>
          <div>
            <HomeMainTitle>
              이웃과 함께 하는
              <br />
              동네생활
            </HomeMainTitle>
            <MainText>
              우리 동네의 다양한 이야기를 이웃과 함께 나누어요.
            </MainText>
            <ul className="home-story-list">
              <li className="home-story-list-item">
                <IconStory className="icon-story-01"></IconStory>
                <ItemTitleArea>우리동네질문</ItemTitleArea>
                <ItemDescArea>
                  궁금한 게 있을 땐 이웃에게 물어보세요.
                </ItemDescArea>
              </li>
              <li className="home-story-list-item">
                <IconStory className="icon-story-02"></IconStory>
                <ItemTitleArea>동네분실센터</ItemTitleArea>
                <ItemDescArea>
                  무언가를 잃어버렸을 때, 함께 찾을 수 있어요.
                </ItemDescArea>
              </li>
              <li className="home-story-list-item">
                <IconStory className="icon-story-03"></IconStory>
                <ItemTitleArea>동네모임</ItemTitleArea>
                <ItemDescArea>
                  관심사가 비슷한 이웃과 온오프라인으로 만나요.
                </ItemDescArea>
              </li>
            </ul>
          </div>
        </HomeMainReverseContent>
      </HomeMainGreenSection>
      <HomeMainSection>
        <HomeMainContent>
          <HomeMainImage03>
            <img
              srcSet="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-3-5fd6fb61d603ab919a45566b2ea6b505c83a93ec218f34ddcd5cb482543e2317.webp "
              className="home-main-image-03"
              loading="lazy"
              alt="내 근처에서 찾는 동네가게"
              src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-3-0c8b631ac2294ac5a3b3e7a3a5580c3e68a3303ad2aded1e84aa57a2e1442786.png"
            />
          </HomeMainImage03>
          <div>
            <HomeMainTitle>
              내 근처에서 찾는
              <br />
              동네가게
            </HomeMainTitle>
            <MainText>
              우리 동네 가게를 찾고 있나요?
              <br />
              동네 주민이 남긴 진짜 후기를 함께 확인해보세요!
            </MainText>
            <HomeButtons>
              <a target="_blank" className="home-button text-l text-bold" data-event-category="town_link_from" data-event-action="index_base" data-event-label="main_town" href="https://town.daangn.com/">당근마켓 동네가게 찾기</a>
            </HomeButtons>
          </div>
        </HomeMainContent>
      </HomeMainSection>
    </>
  );
}
const MainText = styled.p`
  font-size: 1.6rem !important;
  line-height: 1.5;
  letter-spacing: -0.3px;
`;
const HomeTitle = styled.h1`
  font-size: 4rem;
  line-height: 1.35;
  margin-bottom: 2.4rem;
`;
const HomeMainTitle = styled.h1`
  font-size: 4rem;
  line-height: 1.35;
  margin-bottom: 2.4rem;
`;
const HomeButtons = styled.div`
  margin-top: 3.2rem;
`;
const ItemTitleArea = styled.div`
  margin-bottom: 0.8rem;
  margin-top: 1.6rem;
  font-size: 1.4rem !important;
  line-height: 1.5;
  font-weight: bold;
`;
const ItemDescArea = styled.div`
  font-size: 1.3rem !important;
  line-height: 1.5;
`;
const IconStory = styled.div`
  width: 56px;
  height: 56px;
  background-size: 56px 56px;
`;
const HomeMainSectionTop = styled.section`
  padding-top: 24px;
  background-color: #fbf7f2;
  ${HomeMainTitle} {
    font-size: 4.8rem;
    line-height: 1.3;
    padding-top: 27rem;
    margin-bottom: 3.2rem;
    letter-spacing: -0.4px;
  }
  ${MainText} {
    font-size: 1.6rem !important;
    line-height: 1.5;
    letter-spacing: -0.3px;
  }
`;
const HomeMainTop = styled.div`
  width: 1024px;
  height: 760px;
  margin: 0 auto;
  position: relative;
  background-color: #fbf7f2;
`;

const HomeMainImageTop = styled.div`
  position: absolute;
  right: -84px;
  bottom: 0;
  width: 804px;
  height: 685px;
  background-color: #fbf7f2;
  background-repeat: no-repeat;
  background-size: 804px 685px;
  img {
    position: absolute;
    right: -84px;
    bottom: 0;
    width: 804px;
    height: 685px;
    background-color: #fbf7f2;
    background-repeat: no-repeat;
    background-size: 804px 685px;
  }
`;

const HomeMainSection = styled.section`
  padding: 6rem 0;
  ${HomeTitle} {
    font-size: 4rem;
    line-height: 1.35;
    margin-bottom: 2.4rem;
  }
  .text-m {
    font-size: 1.6rem !important;
    line-height: 1.5;
    letter-spacing: -0.3px;
  }
  ${HomeButtons} {
    .home-button {
      background-color: #f1f3f5;
      color: #212529;
      border: none;
      border-radius: 6px;
      text-decoration: none;
      padding: 1.45rem 2.6rem;
      display: inline-block;
    }
    .home-button:hover {
      background-color: #e9ecef;
    }
    a ~ a {
      margin-left: 1.6rem;
    }
  }
  .text-l {
    font-size: 1.8rem !important;
    line-height: 1.47;
    letter-spacing: -0.3px;
  }
  .text-bold {
    font-weight: bold;
  }
  .ml-3 {
    margin-left: 1.6rem;
  }
`;

const HomeMainContent = styled.div`
  width: 1024px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HomeMainImage = styled.div`
  background-size: 532px 684px;
  width: 532px;
  height: 684px;
  display: inline-block;
  img {
    background-size: 532px 684px;
    width: 532px;
    height: 684px;
  }
`;

const HomeMainGreenSection = styled(HomeMainSection)`
  background-color: rgb(230, 243, 230);
  ul li {
    margin: 1.6rem;
  }
  .home-story-list {
    margin-top: 4rem;
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    .home-story-list-item {
      margin-right: 4rem;
      margin-left: 0;
      max-width: 14rem;
    }
    .icon-story-01 {
      background-image: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/main/icon-story-1-9226479b836cdc960291ffda91ace46c90a632f6cc868aa8983b3624e662a924.svg);
    }
    .icon-story-02 {
      background-image: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/main/icon-story-2-208bb88cad31e335b40bc8ac5b7684dcf8a36d77ac50770a497a9c967a3bfc4f.svg);
    }
    .icon-story-03 {
      background-image: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/main/icon-story-3-0a14d64c6101a7271655747d8401b9f71506578f8a4c0640608074e977bbc7c0.svg);
    }
    ${IconStory} {
      width: 56px;
      height: 56px;
      background-size: 56px 56px;
    }
  }
`;
const HomeMainReverseContent = styled(HomeMainContent)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;
const HomeMainImage02 = styled(HomeMainImage)`
  background-size: 546px 740px;
  width: 546px;
  height: 740px;
  img {
    background-size: 546px 740px;
    width: 546px;
    height: 740px;
  }
`;

const HomeMainImage03 = styled(HomeMainImage)`
  background-size: 526px 735px;
  width: 526px;
  height: 735px;
`;

export default HomePage;
