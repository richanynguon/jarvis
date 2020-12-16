import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { WidgetContext } from "../../modules/widgetContext";

const OnboardContainer = styled.div`
  border: 3px green solid;
  border-radius: 15px;
  height: 100%;
`;

function CreateAccount() {
  const { userState, setUserState } = useContext(WidgetContext);
  return (
    <div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setUserState({
            ...userState,
            onboardingProgress: userState.onboardingProgress + 1,
          });
        }}
      >
        a
      </button>
    </div>
  );
}

function IdentifyLevel() {
  const { userState, setUserState } = useContext(WidgetContext);
  return (
    <div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setUserState({
            ...userState,
            onboardingProgress: userState.onboardingProgress + 1,
          });
        }}
      >
        b
      </button>
    </div>
  );
}

function ProjectHistoryOverView() {
  const { userState, setUserState } = useContext(WidgetContext);
  return (
    <div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setUserState({
            ...userState,
            onboardingProgress: userState.onboardingProgress + 1,
          });
        }}
      >
        c
      </button>
    </div>
  );
}

function CreateProject() {
  const { userState, setUserState } = useContext(WidgetContext);
  return (
    <div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setUserState({
            ...userState,
            onboardingProgress: userState.onboardingProgress + 1,
          });
        }}
      >
        d
      </button>
    </div>
  );
}

function IdentifyInterests() {
  const { userState, setUserState } = useContext(WidgetContext);
  return (
    <div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setUserState({
            ...userState,
            onboardingProgress: userState.onboardingProgress + 1,
          });
        }}
      >
        e
      </button>
    </div>
  );
}

function ReasonOfFocus() {
  const { userState, setUserState } = useContext(WidgetContext);
  return (
    <div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setUserState({
            ...userState,
            onboardingProgress: userState.onboardingProgress + 1,
          });
        }}
      >
        f
      </button>
    </div>
  );
}

function WalkThrough() {
  const { userState, setUserState } = useContext(WidgetContext);
  return (
    <div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setUserState({
            ...userState,
            onboardingComplete: true,
            onboardingProgress: userState.onboardingProgress + 1,
          });
        }}
      >
        g
      </button>
    </div>
  );
}

export function Onboard(props) {
  const { userState } = useContext(WidgetContext);
  let CurrentView;

  switch (userState.onboardingProgress) {
    case 0:
      CurrentView = <CreateAccount />;
      break;
    case 1:
      CurrentView = <IdentifyLevel />;
      break;
    case 2:
      CurrentView = <ProjectHistoryOverView />;
      break;
    case 3:
      CurrentView = <CreateProject />;
      break;
    case 4:
      CurrentView = <IdentifyInterests />;
      break;
    case 5:
      CurrentView = <ReasonOfFocus />;
      break;
    case 6:
      CurrentView = <WalkThrough />;
      break;
    default:
      break;
  }
  useEffect(() => {}, [userState.progress]);

  return <OnboardContainer>{CurrentView}</OnboardContainer>;
}
