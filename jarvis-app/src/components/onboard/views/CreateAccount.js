import { useContext } from "react";
import { WidgetContext } from "../../../modules/widgetContext";
import styled from "styled-components";
import * as c from "../../../design-system/variables/colours";
import { H4, H5 } from "../../../design-system/typography";
import { Button } from "../../../design-system/buttons";
import { Jarvis } from "./Jarvis";

const WelcomeContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${c.DARK_NEUTRAL_COLOR};
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;



const Dialogue = styled.div`
  text-align: center;
  height: 300px;
`;

const ButtonsGroup = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export function CreateAccount() {
  const { userState, setUserState } = useContext(WidgetContext);
  return (
    <WelcomeContainer>
      <Jarvis/>
      <Dialogue>
        <H4 PRIMARY>Hello my name is Jarvis</H4>
        <H5 PRIMARY>Please identify your role</H5>
        <ButtonsGroup>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setUserState({
                ...userState,
                onboardingProgress: userState.onboardingProgress + 1,
              });
            }}
          >
            <H5 LIGHT>New User</H5>
          </Button>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setUserState({
                ...userState,
                currentView: 1,
              });
            }}
          >
            <H5 LIGHT>Returning User</H5>
          </Button>
        </ButtonsGroup>
      </Dialogue>
    </WelcomeContainer>
  );
}
