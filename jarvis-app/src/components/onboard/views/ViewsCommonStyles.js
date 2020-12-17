import styled from "styled-components";
import background from "../../../assets/background.png";

export const ViewContainer = styled.div`
  background-image: ${(props) => `url(${background})`};
  background-repeat: none;
  background-size: cover;
  height: 100%;
  width: 100%;
  border-radius: 15px;
`;

export const LowOpacityContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 15px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const Dialogue = styled.div`
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;