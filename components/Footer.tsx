/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Image from 'next/image';

const footerStyles = css`
  padding-top: 15px;
  padding-bottom: 15px;
  margin-top: 0;
  margin-bottom: 0;
  background-color: #f9f6e7;
  font-family: 'Orbitron', sans-serif;
  border-top: 1px solid #2b3826;

  a {
    text-decoration: none;
    color: #2b3826;
    margin-left: 240px;
  }
`;

const emailUsStyles = css`
  margin-bottom: 40px;
`;

const socialMediaStyles = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  span {
    margin-left: 10px;
  }
`;

const emailStyles = css`
  padding: 10px;
  width: 350px;
`;

const newsletterStyles = css`
  display: flex;
  flex-direction: column;

  input {
    border: 2px solid #4c384f;
    box-shadow: inset 4px 4px 2px rgb(36 29 39 / 5%),
      inset 1px 1px 2px 2px rgb(36 29 39 / 5%);
    border-radius: 10px;
    padding: 10px !important;
    margin-top: 4px !important;

    :focus {
      outline: none;
      border-color: #b75200;
    }
  }
`;

const nameStyles = css`
  display: flex;
  gap: 45px;
  margin-bottom: 20px;
`;

const contentStyles = css`
  display: flex;
  gap: 50px;
  justify-content: space-around;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-top: 0;
  margin-bottom: 0;
  font-family: 'Orbitron', sans-serif;
`;

const buttonStyles = css`
  align-items: center;
  appearance: none;
  background-color: #612c23;
  border: 1px solid #dbdbdb;
  border-radius: 0.375em;
  box-shadow: none;
  box-sizing: border-box;
  color: #dbdbdb;
  cursor: pointer;
  display: inline-flex;
  font-family: 'Orbitron', sans-serif;
  font-size: 1rem;
  height: 2.5em;
  width: 8em;
  margin-top: 20px;
  justify-content: center;
  line-height: 1.5;
  padding: calc(0.5em - 1px) 1em;
  position: relative;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: top;
  white-space: nowrap;

  :active {
    border-color: #ac716c;
    outline: 0;
  }

  :focus {
    border-color: #612c23;
    outline: 0;
  }

  :hover {
    border-color: #ac716c;
  }

  :focus:not(:active) {
    box-shadow: rgba(72, 95, 199, 0.25) 0 0 0 0.125em;
  }
`;

export default function Footer() {
  return (
    <footer css={footerStyles}>
      <div css={contentStyles}>
        <div>
          <div css={emailUsStyles}>
            <h3>Email us</h3>
            <span>hello@fahrradikal.com</span>
          </div>
          <div css={socialMediaStyles}>
            <h3>Let's stay in touch</h3>
            <div>
              <Image src="/twitterlogo.svg" width={20} height={15} />
              <span>Follow @fahrradikal</span>
            </div>
            <br />
            <div>
              <Image src="/instagramlogo.svg" width={20} height={15} />
              <span>Follow us on Instagram</span>
            </div>
            <br />
            <div>
              <Image src="/facebook.svg" width={20} height={15} />
              <span>Like us on Facebook</span>
            </div>
            <br />
          </div>
        </div>
        <div>
          <h3>
            Subscribe to our newsletter and <br /> learn about the upcoming
            events
          </h3>
          <div css={newsletterStyles}>
            <div css={nameStyles}>
              <label>
                First Name <br /> <input />
              </label>
              <label>
                Last Name <br /> <input />
              </label>
            </div>
            <label>
              Your Email <br /> <input css={emailStyles} />
            </label>
            <button css={buttonStyles}>Subscribe</button>
          </div>
        </div>
      </div>
      <a href="/" target="_blank" rel="noopener noreferrer">
        Powered by Your favorite apple pie <span>🥧</span>
      </a>
    </footer>
  );
}
