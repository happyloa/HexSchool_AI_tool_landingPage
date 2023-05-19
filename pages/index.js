// 引入 Styled Components 套件
import styled, { keyframes } from "styled-components";
// 引入 React Fast Marquee 套件
import Marquee from "react-fast-marquee";

import Head from "next/head";
import Image from "next/image";

import NavBar from "../components/NavBar";

const DesktopHeroParagraph = styled.p`
  font-size: 120px;
  font-weight: 900;
  line-height: 144px;
  margin: 0 0 40px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileHeroParagraph = styled.p`
  display: none;
  font-size: 48px;
  font-weight: 900;
  line-height: 57.6px;
  margin: 0 0 40px;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Cta = styled.button`
  background-color: #000;
  border: 1px solid #fff;
  border-radius: 16px;
  color: #fff;
  font-weight: bold;
  padding: 20px 40px;
  margin: 0 0 40px;
  transition: all 0.3s ease;
  &:hover {
    background-color: #fff;
    border-radius: 32px;
    color: #000;
    transform: translateX(25px);
  }
  @media (max-width: 768px) {
    margin: 0 1em 180px;
  }
`;

const GrassContainer = styled.section`
  justify-content: end;
  margin-bottom: 160px;
  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 120px;
  }
`;
// 定義動畫關鍵影格
const slide = keyframes`
  0% {
    transform: translateY(100%);
  }
  35% {
    transform: translateY(0);
  }
  70% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
`;
const GrassOne = styled.img`
  width: 180px;
  transform: translateY(-100%);
  animation: ${slide} 3s 0.7s infinite ease;
  @media (max-width: 768px) {
    width: 120px;
  }
`;
const GrassTwo = styled.img`
  width: 180px;
  transform: translateY(-100%);
  animation: ${slide} 3s 0.35s infinite ease;
  @media (max-width: 768px) {
    width: 120px;
  }
`;
const GrassThree = styled.img`
  width: 180px;
  transform: translateY(-100%);
  animation: ${slide} 3s 0s infinite ease;
  @media (max-width: 768px) {
    width: 120px;
  }
`;

const OurServices = styled.section`
  margin: 0 0 80px;
  @media (max-width: 768px) {
    margin: 0 0 48px;
  }
`;

const ServicesParagraph = styled.p`
  font-size: 48px;
  font-weight: 900;
  line-height: 57.6px;
  width: 66%;
  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 38.4px;
    width: 100%;
  }
`;

const FeatureDiv = styled.div`
  margin: 0 0 160px;
  @media (max-width: 768px) {
    margin: 0 0 120px;
  }
`;

const Partners = styled.section`
  margin: 0 0 160px;
  @media (max-width: 768px) {
    margin: 0 0 48px;
  }
`;

const PartnersHeading = styled.h2`
  font-weight: 900;
  margin: 0 0 80px;
  @media (max-width: 768px) {
    margin: 0 0 24px;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>AI 工具王 - 首頁</title>
        <meta
          name="description"
          content="2023 軟體工程師體驗營 AI 工具王登陸頁"
        />
      </Head>
      <NavBar />
      <main className="container p-0">
        {/* 桌面版文字 */}
        <DesktopHeroParagraph>
          透過
          <br />
          AI 工具王的
          <br />
          強大模型
          <br />
          讓您的業務更聰明
        </DesktopHeroParagraph>
        {/* 手機版文字 */}
        <MobileHeroParagraph className="mx-3">
          透過
          <br />
          AI 工具王的
          <br />
          強大模型
          <br />
          讓您的業務
          <br />
          更聰明
        </MobileHeroParagraph>
        <Cta>開始使用</Cta>
        <GrassContainer className="overflow-hidden d-flex mx-3">
          <GrassOne src="/deco.png" alt="Grass1"></GrassOne>
          <GrassTwo src="/deco.png" alt="Grass2"></GrassTwo>
          <GrassThree src="/deco.png" alt="Grass3"></GrassThree>
        </GrassContainer>
        <OurServices className="d-md-flex justify-content-between mx-3">
          <h2 className="mb-5">我們的服務</h2>
          <ServicesParagraph>
            我們相信透過 AI 技術，
            <br />
            包括圖像識別、自然語言處理和機器翻譯等，讓您更快、更準確地做出決策。
          </ServicesParagraph>
        </OurServices>
        <FeatureDiv className="row mx-3">
          <div className="col border border-light-subtle rounded-4 px-4 py-5 m-3">
            <Image
              src="/icons/flash on.png"
              alt="閃電 icon"
              className="mb-3"
              width={80}
              height={80}
            />
            <h3 className="fw-bolder mb-3">快速</h3>
            <p>
              我們先進的推理基礎設施提供了極短的響應時間，讓你的產品服務不間斷。
            </p>
          </div>
          <div className="col border border-light-subtle rounded-4 px-4 py-5 m-3">
            <Image
              src="/icons/auto awesome.png"
              alt="星星 icon"
              className="mb-3"
              width={80}
              height={80}
            />
            <h3 className="fw-bolder mb-3">靈活</h3>
            <p>
              我們的服務可以根據您的需求進行靈活調整，同時還可以滿足不同項目和預算的需求。
            </p>
          </div>
          <div className="col border border-light-subtle rounded-4 px-4 py-5 m-3">
            <Image
              src="/icons/library add.png"
              alt="新增 icon"
              className="mb-3"
              width={80}
              height={80}
            />
            <h3 className="fw-bolder mb-3">擴充</h3>
            <p>我們的服務支持多種擴充選項，可以滿足您的不斷增長的 AI 需求。</p>
          </div>
        </FeatureDiv>
        <Partners className="mx-3">
          <PartnersHeading>來自合作夥伴</PartnersHeading>
          <Marquee className="d-flex mb-4">
            <img src="/enterprise.png" className="mx-2 img-fluid" />
            <img src="/enterprise1.png" className="mx-2 img-fluid" />
            <img src="/enterprise2.png" className="mx-2 img-fluid" />
            <img src="/enterprise3.png" className="mx-2 img-fluid" />
            <img src="/enterprise4.png" className="mx-2 img-fluid" />
            <img src="/enterprise5.png" className="mx-2 img-fluid" />
          </Marquee>
          <Marquee className="d-flex" direction="right">
            <img src="/enterprise6.png" className="mx-2 img-fluid" />
            <img src="/enterprise7.png" className="mx-2 img-fluid" />
            <img src="/enterprise8.png" className="mx-2 img-fluid" />
            <img src="/enterprise9.png" className="mx-2 img-fluid" />
            <img src="/enterprise11.png" className="mx-2 img-fluid" />
            <img src="/enterprise12.png" className="mx-2 img-fluid" />
          </Marquee>
        </Partners>
      </main>
    </>
  );
}
