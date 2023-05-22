// 引入 Styled Components 套件
import styled from "styled-components";

const AIToolWrapper = styled.main`
  background-color: #fff;
  border-radius: 160px;
  padding: 160px 312px;
  @media (max-width: 768px) {
    border-radius: 20px;
    padding: 80px 12px;
  }
`;

export default function ComeFromAI() {
  return <AIToolWrapper className="container-fluid"></AIToolWrapper>;
}
