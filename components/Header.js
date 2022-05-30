import { css } from '@emotion/react';
import Link from 'next/link';

const headerStyles = css`
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  background: #fffbe8;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  font-size: 20px;
  padding-right: 20px;
  font-family: 'Quicksand', sans-serif;

  h1 {
    font-size: 40px;
    margin-left: 700px;
    font-family: 'Russo One', sans-serif;
    font-style: normal;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: #2e0800;
    font-family: 'Orbitron', sans-serif;
    font-weight: 800;
  }
`;

const navbarStyles = css`
  display: flex;
  justify-content: space-between;
`;

const linkStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  padding-left: 670px; ;
`;

const iconStyles = css`
  display: flex;
  justify-content: right;
  gap: 30px;
  padding-left: 0;
`;

export default function Header() {
  return (
    <header css={headerStyles}>
      <div>
        <h1>FahrRadikal</h1>
      </div>
      <div css={navbarStyles}>
        <div css={linkStyles}>
          <Link href="/">Home </Link>
          <Link href="/about">About </Link>
          <Link href="/shop">Shop </Link>
        </div>
        <div css={iconStyles}>
          <span className="material-symbols-outlined">search</span>
          <span className="material-symbols-outlined">favorite</span>
          <span className="material-symbols-outlined">shopping_bag</span>
        </div>
      </div>
    </header>
  );
}
