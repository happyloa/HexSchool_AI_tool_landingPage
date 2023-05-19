// 引入 Styled Components 套件
import styled, { keyframes } from "styled-components";
// 引入 React Fast Marquee 套件
import Marquee from "react-fast-marquee";

import Head from "next/head";
import Image from "next/image";

import NavBar from "../components/NavBar";

const DesktopHeroHeading = styled.h1`
  font-size: 120px;
  font-weight: 900;
  line-height: 144px;
  margin: 0 0 40px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileHeroHeading = styled.h1`
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

const Feature = styled.section`
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

const DesktopTestimonial = styled.section`
  margin: 0 0 160px;
`;
const TestimonialDiv = styled.div`
  background-color: #121212;
`;
const TestimonialP = styled.p`
  height: 215px;
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
        <DesktopHeroHeading>
          透過
          <br />
          AI 工具王的
          <br />
          強大模型
          <br />
          讓您的業務更聰明
        </DesktopHeroHeading>
        {/* 手機版文字 */}
        <MobileHeroHeading className="mx-3">
          透過
          <br />
          AI 工具王的
          <br />
          強大模型
          <br />
          讓您的業務
          <br />
          更聰明
        </MobileHeroHeading>
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
        <Feature className="row g-4">
          <div className="col-md-4">
            <div className="border border-light-subtle rounded-4 px-4 py-5">
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
          </div>
          <div className="col-md-4">
            <div className="border border-light-subtle rounded-4 px-4 py-5">
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
          </div>
          <div className="col-md-4">
            <div className="border border-light-subtle rounded-4 px-4 py-5">
              <Image
                src="/icons/library add.png"
                alt="新增 icon"
                className="mb-3"
                width={80}
                height={80}
              />
              <h3 className="fw-bolder mb-3">擴充</h3>
              <p>
                我們的服務支持多種擴充選項，可以滿足您的不斷增長的 AI 需求。
              </p>
            </div>
          </div>
        </Feature>
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
        <DesktopTestimonial className="d-none d-md-flex row g-4">
          <div className="col-md-4">
            <TestimonialDiv className="rounded-4 p-5">
              <div className="d-flex">
                <Image
                  src="/icons/star.png"
                  alt="星星 icon"
                  className="me-1 mb-4"
                  width={16}
                  height={16}
                />
                <Image
                  src="/icons/star.png"
                  alt="星星 icon"
                  className="me-1 mb-4"
                  width={16}
                  height={16}
                />
                <Image
                  src="/icons/star.png"
                  alt="星星 icon"
                  className="me-1 mb-4"
                  width={16}
                  height={16}
                />
                <Image
                  src="/icons/star.png"
                  alt="星星 icon"
                  className="me-1 mb-4"
                  width={16}
                  height={16}
                />
                <Image
                  src="/icons/star.png"
                  alt="星星 icon"
                  className="me-1 mb-4"
                  width={16}
                  height={16}
                />
              </div>
              <TestimonialP>
                非常喜歡 AI工具王 提供的 AI
                模型租賃服務，使用起來非常方便，而且效果非常好。對於我們公司的業務來說，這個服務非常重要，因為我們需要大量的數據進行分析和預測，AI工具王
                提供的 AI 模型能夠幫助我們節省大量時間和成本，實在是太棒了！
              </TestimonialP>
              <div className="d-flex">
                <Image
                  src="/avatar3.png"
                  alt="見證者照片"
                  className="me-3"
                  width={48}
                  height={48}
                />
                <div>
                  <h6 className="fw-bold">陳小姐</h6>
                  <span>ABC科技有限公司</span>
                </div>
              </div>
            </TestimonialDiv>
          </div>
          <div className="col-md-4">
            <TestimonialDiv className="rounded-4 p-5">
              <div className="d-flex">
                <Image
                  src="/icons/star.png"
                  alt="星星 icon"
                  className="me-1 mb-4"
                  width={16}
                  height={16}
                />
                <Image
                  src="/icons/star.png"
                  alt="星星 icon"
                  className="me-1 mb-4"
                  width={16}
                  height={16}
                />
                <Image
                  src="/icons/star.png"
                  alt="星星 icon"
                  className="me-1 mb-4"
                  width={16}
                  height={16}
                />
                <Image
                  src="/icons/star.png"
                  alt="星星 icon"
                  className="me-1 mb-4"
                  width={16}
                  height={16}
                />
                <Image
                  src="/icons/star.png"
                  alt="星星 icon"
                  className="me-1 mb-4"
                  width={16}
                  height={16}
                />
              </div>
              <TestimonialP>
                作為一家醫療器材公司，我們非常關注人工智能技術的應用，而
                AI工具王 提供的 AI 模型租賃服務為我們帶來了很大的幫助。我們使用
                AI工具王
                的模型進行醫學影像分析和預測，這些模型非常精確，能夠幫助我們更好地診斷病情，提高治療效果。感謝
                AI工具王 團隊的辛勤工作！
              </TestimonialP>
              <div className="d-flex">
                <Image
                  src="/avatar1.png"
                  alt="見證者照片"
                  className="me-3"
                  width={48}
                  height={48}
                />
                <div>
                  <h6 className="fw-bold">劉小姐</h6>
                  <span>XYZ 醫療器材有限公司</span>
                </div>
              </div>
            </TestimonialDiv>
          </div>
          <div className="col-md-4">
            <TestimonialDiv className="rounded-4 p-5">
              <div className="d-flex">
                <Image
                  src="/icons/star.png"
                  alt="星星 icon"
                  className="me-1 mb-4"
                  width={16}
                  height={16}
                />
                <Image
                  src="/icons/star.png"
                  alt="星星 icon"
                  className="me-1 mb-4"
                  width={16}
                  height={16}
                />
                <Image
                  src="/icons/star.png"
                  alt="星星 icon"
                  className="me-1 mb-4"
                  width={16}
                  height={16}
                />
                <Image
                  src="/icons/star.png"
                  alt="星星 icon"
                  className="me-1 mb-4"
                  width={16}
                  height={16}
                />
                <Image
                  src="/icons/star.png"
                  alt="星星 icon"
                  className="me-1 mb-4"
                  width={16}
                  height={16}
                />
              </div>
              <TestimonialP>
                我們銀行一直在尋找能夠幫助我們提高風險控制和客戶服務的解決方案，而
                AI工具王 提供的 AI 模型租賃服務正好滿足了我們的需求。我們使用
                AI工具王
                的模型進行客戶信用評估和詐騙檢測等任務，這些模型非常準確，能夠幫助我們更好地控制風險，提高客戶滿意度。非常感謝
                AI工具王 團隊的支持！
              </TestimonialP>
              <div className="d-flex">
                <Image
                  src="/avatar2.png"
                  alt="見證者照片"
                  className="me-3"
                  width={48}
                  height={48}
                />
                <div>
                  <h6 className="fw-bold">黃先生</h6>
                  <span>EFG 銀行</span>
                </div>
              </div>
            </TestimonialDiv>
          </div>
        </DesktopTestimonial>
      </main>
    </>
  );
}
