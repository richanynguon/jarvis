import { useContext } from "react";
import { WidgetContext } from "../../../modules/widgetContext";
import styled from "styled-components";
import background from "../../../assets/background.png";
import { Icon } from "../../../design-system/icons";
import Forward from "../../../assets/action_icons/keyboard_arrow_right.svg";
import Back from "../../../assets/action_icons/keyboard_arrow_left.svg";
import { H1, H2, H3 } from "../../../design-system/typography";
import { Jarvis } from "./Jarvis";

const LevelContainer = styled.div`
  background-image: ${(props) => `url(${background})`};
  background-repeat: none;
  background-size: cover;
  height: 100%;
  width: 100%;
  border-radius: 15px;
`;

const LowOpacityContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 15px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const Dialogue = styled.div`
padding: 20px;
text-align: center;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
height: 100%;
`;



export function IdentifyLevel() {
  const { userState, setUserState } = useContext(WidgetContext);
  return (
    <LevelContainer>
      <LowOpacityContainer>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setUserState({
                ...userState,
                onboardingProgress: userState.onboardingProgress - 1,
              });
            }}
          >
            <Icon src={Back} />
          </button>
          < Dialogue>
          <Jarvis/>
          <H3>Ah I have been waiting for an assistant!</H3>
          </Dialogue>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setUserState({
                ...userState,
                onboardingProgress: userState.onboardingProgress + 1,
              });
            }}
          >
            <Icon src={Forward} />
          </button>

      </LowOpacityContainer>
    </LevelContainer>
  );
}
