import styled, { css } from "styled-components";


// This component is for a button
const Button = styled.button`
  cursor: pointer;
  font-weight: bold;
  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `};
  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `};
  ${(props) =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize};
    `};
    ${(props) =>
    props.fontColor &&
    css`
        color: ${props.fontColor};
      `};
  ${(props) =>
    props.border &&
    css`
      border: ${props.border};
    `};
  ${(props) =>
    props.borderRadius &&
    css`
      border-radius: ${props.borderRadius};
    `};
  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
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
  &:hover {
    ${(props) =>
    props.hover &&
    css`
        opacity: ${props.hover};
      `};
  }

  ${(props) =>
    props.opacity &&
    css`
      opacity: ${props.opacity};
    `};
`;


export default Button;