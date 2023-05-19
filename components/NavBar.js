// 引入 Styled Components 套件
import styled from "styled-components";

import Image from "next/image";
import Link from "next/link";

const Nav = styled.nav`
  background-color: #00000080;
  backdrop-filter: blur(7px);
  margin-bottom: 40px;
`;

const DivContainer = styled.div`
  border-bottom: 1px solid #fff;
  padding: 10px 0;
`;

export default function NavBar() {
  return (
    <Nav className="navbar sticky-top mx-3">
      <DivContainer className="container">
        <Link className="navbar-brand" href="/">
          <Image src="/logo.png" alt="AI 工具王" width={225} height={40} />
        </Link>
        <ul className="navbar-nav flex-row">
          <li className="nav-item me-3">
            <Link className="nav-link text-white" href="/">
              首頁
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" href="/pricing">
              定價
            </Link>
          </li>
        </ul>
      </DivContainer>
    </Nav>
  );
}
