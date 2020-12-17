import styled from "styled-components";
import * as c from "./variables/colours";

export const InvertButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border: 1px ${c.PRIMARY_POP_COLOR} solid;
  width: 200px;
  margin: 1em 0em 1em 0em;

  &:hover {
    transform: scale(1.01);
  }
  background: none;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border: 1px ${c.PRIMARY_POP_COLOR} solid;
  width: 200px;
  margin: 1em 0em 1em 0em;
  &:hover {
    transform: scale(1.01);
  }
  background: ${c.PRIMARY_POP_COLOR};
`;
