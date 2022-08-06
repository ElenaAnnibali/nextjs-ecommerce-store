import { css } from '@emotion/react';
import Footer from './Footer';
import Header from './Header';

const layoutStyles = css`
  background-color: #fefbed;
`;

export default function Layout(props) {
  return (
    <div>
      <Header {...props} />
      <div css={layoutStyles}>{props.children}</div>
      <Footer />
    </div>
  );
}
