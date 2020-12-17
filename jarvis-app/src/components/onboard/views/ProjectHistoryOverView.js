import { useContext } from "react";
import { WidgetContext } from "../../../modules/widgetContext";
import styled from "styled-components";
import {
  ViewContainer,
  LowOpacityContainer,
  Dialogue,
  ButtonGroup,
} from "./ViewsCommonStyles";
import { Icon } from "../../../design-system/icons";
import Back from "../../../assets/action_icons/keyboard_arrow_left.svg";
import { H3, H4, H5 } from "../../../design-system/typography";
import { Jarvis } from "./Jarvis";
import { Button } from "../../../design-system/buttons";
import Forward from "../../../assets/action_icons/keyboard_arrow_right.svg";

const ProjectListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectList = styled.div`
  overflow-y: scroll;
`;

export function ProjectHistoryOverView() {
  const { userState, setUserState } = useContext(WidgetContext);
  return (
    <ViewContainer>
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
        <Dialogue>
          <Jarvis />
          {Object.keys(userState.projects).length === 0 ? (
            <H3>
              Let's talk! So if you have any projects to let me know about click
              the add button, if not it's okay! We'll fix that after onboarding
              just click on the forward arrow!🙌{" "}
            </H3>
          ) : (
            <ProjectListContainer>
              <H3> Do you have more to add?</H3>
              <ProjectList></ProjectList>
            </ProjectListContainer>
          )}
          <ButtonGroup>
            <Button
              onClick={() => {
                setUserState({
                  ...userState,
                  onboardingProgress: userState.onboardingProgress + 1,
                });
              }}
            >
              <H5 LIGHT>Add Project</H5>
            </Button>
          </ButtonGroup>
        </Dialogue>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setUserState({
              ...userState,
              onboardingProgress: userState.onboardingProgress + 2,
            });
          }}
        >
          <Icon src={Forward} />
        </button>
      </LowOpacityContainer>
    </ViewContainer>
  );
}
