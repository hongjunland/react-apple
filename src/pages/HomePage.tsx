import styled from "@emotion/styled";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <HomeMainSectionTop>
        <HomeMainTop>
          <div>
            <h1 className="home-main-title">
              당신 근처의
              <br />
              당근마켓
            </h1>
            <p className="text-m">
              중고 거래부터 동네 정보까지, 이웃과 함께해요.
              <br />
              가깝고 따뜻한 당신의 근처를 만들어요.
            </p>
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
            <h1 className="home-title">
              우리 동네
              <br />
              중고 직거래 마켓
            </h1>
            <p className="text-m">
              동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.
            </p>
            <div className="home-buttons">
              <Link to ="/" className="home-button text-l text-bold">인기매물 보기</Link>
              <Link to ="/" className="home-button text-l text-bold ml-3">믿을 수 있는 중고거래</Link>
            </div>
          </div>
        </HomeMainContent>
      </HomeMainSection>
    </>
  );
}
const HomeMainSectionTop = styled.section`
  padding-top: 24px;
  background-color: #fbf7f2;
  .home-main-title {
    font-size: 4.8rem;
    line-height: 1.3;
    padding-top: 27rem;
    margin-bottom: 3.2rem;
    letter-spacing: -0.4px;
  }
  .text-m {
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
  .home-title{
    font-size: 4rem;
    line-height: 1.35;
    margin-bottom: 2.4rem;
  }
  .text-m{
    font-size: 1.6rem !important;
    line-height: 1.5;
    letter-spacing: -0.3px;
  }
  .home-buttons{
    margin-top: 3.2rem;
    .home-button{
      background-color: #F1F3F5;
      color: #212529;
      border: none;
      border-radius: 6px;
      text-decoration: none;
      padding: 1.45rem 2.6rem;
      display: inline-block;
    }
    .home-button:hover{
      background-color: #E9ECEF;
    }
    a ~ a{
      margin-left: 1.6rem;
    }
  }
  .text-l{
    font-size: 1.8rem !important;
    line-height: 1.47;
    letter-spacing: -0.3px;
  }
  .text-bold{
    font-weight: bold;
  }
  .ml-3{
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
  img {
    background-size: 532px 684px;
    width: 532px;
    height: 684px;
  }
`;


export default HomePage;
