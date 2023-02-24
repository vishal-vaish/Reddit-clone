import styled, { css } from "styled-components";

const Logo = styled.img`
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 15px;

  ${(props) =>
        props.src &&
        css`
      src: ${props.src};
    `};
  ${(props) =>
        props.alt &&
        css`
      alt: ${props.alt};
    `};
`;

export default Logo;
