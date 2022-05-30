import { css } from '@emotion/react';

const footerStyles = css`
  padding: 8px 14px;
  background: #fffbe8;
  border-radius: 6px;
  font-family: 'Orbitron', sans-serif;

  a {
    text-decoration: none;
    color: #2e0800;
  }
`;

export default function Footer() {
  return (
    <footer css={footerStyles}>
      <a href="/" target="_blank" rel="noopener noreferrer">
        Powered by Your favorite apple pie <span>🥧</span>
      </a>
    </footer>
  );
}
