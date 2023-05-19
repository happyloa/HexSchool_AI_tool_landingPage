// 引入 Styled Components 套件
import styled, { keyframes } from "styled-components";

import Head from "next/head";

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
        <Cta type="button" class="btn btn-dark mx-3">
          開始使用
        </Cta>
        <GrassContainer className="overflow-hidden d-flex mx-3">
          <GrassOne src="/deco.png" alt="Grass1"></GrassOne>
          <GrassTwo src="/deco.png" alt="Grass2"></GrassTwo>
          <GrassThree src="/deco.png" alt="Grass3"></GrassThree>
        </GrassContainer>
      </main>
    </>
  );
}
