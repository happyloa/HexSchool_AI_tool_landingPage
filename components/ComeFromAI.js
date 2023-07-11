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

const ComeFromAIToolTitle = styled.h2`
  color: #000;
  font-size: 80px;
  margin: 0 0 80px;
`;

export default function ComeFromAI() {
  return (
    <AIToolWrapper className="container-fluid">
      <ComeFromAIToolTitle className="fw-bolder text-center">
        這些超酷的應用，都來自 AI工具王
      </ComeFromAIToolTitle>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          @
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="輸入關鍵字搜尋"
          aria-label="search"
        />
      </div>
    </AIToolWrapper>
  );
}
