import styled from "styled-components";

export const Icon = styled.img`
  filter: ${(props) =>
    props.primary
      ? "invert(69%) sepia(100%) saturate(303%) hue-rotate(131deg) brightness(92%) contrast(91%)"
      : ""};
  filter: ${(props) =>
    props.light
      ? "invert(99%) sepia(0%) saturate(5435%) hue-rotate(303deg) brightness(127%) contrast(89%)"
      : ""};
  margin: 5px;
`;

export const Logo = styled.img`
  width: 100%;
  max-width: 100px;
  margin: 5px;
`;
