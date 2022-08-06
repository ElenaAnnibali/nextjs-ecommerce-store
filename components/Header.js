import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';

const headerStyles = css`
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  font-size: 20px;
  padding-right: 20px;
  font-family: 'Quicksand', sans-serif;
  background-color: #fefbed !important;

  h1 {
    font-size: 40px;
    margin-left: 700px;
    font-family: 'Russo One', sans-serif;
    font-style: normal;
    font-weight: 700;
  }
`;

const logoStyles = css`
  border-bottom: 1px solid #2b3826;
  background: #fffbe8;

  div {
    margin-left: 560px;
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
  padding-left: 670px;
  margin-bottom: 10px;

  a {
    text-decoration: none !important;
    color: #2e0800;
    font-family: 'Orbitron', sans-serif;
    font-weight: 800;
  }
`;

const iconStyles = css`
  display: flex;
  justify-content: right;
  gap: 30px;
  padding-left: 0;
  cursor: pointer;
`;

const cartCounterStyles = css`
  cursor: pointer;
  font-size: 14px;
  margin-left: -35px;
  padding: 1px;
  border-width: 1px;
  border-color: #000;
  border-style: solid;
  border-radius: 50px;
  background-color: #feffeb;

  span {
    position: relative;
  }
`;

export default function Header(props) {
  // const cartCounterProps = props.cartCounter;

  // let showAmount = 0;
  // for (let i = 0; i < cartCounterProps.length; i++) {
  //   showAmount += cartCounterProps[i].quantity;
  // }

  return (
    <header css={headerStyles}>
      <div>
        <div css={logoStyles}>
          <div>
            <Image src="/logo4.svg" width={450} height={120} />
          </div>
          <div css={iconStyles}>
            <span className="material-symbols-outlined">search</span>
            <span className="material-symbols-outlined">favorite</span>
            <Link href="/cart">
              <span className="material-symbols-outlined">
                shopping_bag{' '}
                <span css={cartCounterStyles}>{props.cartCounter}</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div css={navbarStyles}>
        <div css={linkStyles}>
          <Link href="/">Home </Link>
          <Link href="/about">About </Link>
          <Link href="/shop">Shop </Link>
        </div>
      </div>
    </header>
  );
}
