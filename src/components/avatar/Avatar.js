import styled, { css } from "styled-components";

// For Avatar ( circular image )
const Avatar = styled.img`
  cursor: pointer;
  border-radius: 50%;
  height: 50px;
  width: 50px;
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
  ${(props) =>
    props.mt &&
    css`
      margin-top: ${props.mt};
    `};
  ${(props) =>
    props.mr &&
    css`
      margin-right: ${props.mr};
    `};
  ${(props) =>
    props.mb &&
    css`
      margin-bottom: ${props.mb};
    `};
  ${(props) =>
    props.ml &&
    css`
      margin-left: ${props.ml};
    `};
`;

export default Avatar;
