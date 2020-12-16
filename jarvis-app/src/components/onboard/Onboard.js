import { useContext } from "react";
import styled from "styled-components";
import { WidgetContext } from "../../modules/widgetContext";
import { CreateAccount } from "./views/CreateAccount";
import { CreateProject } from "./views/CreateProject";
import { IdentifyInterests } from "./views/IdentifyInterests";
import { IdentifyLevel } from "./views/IdentifyLevel";
import { ReasonOfFocus } from "./views/ReasonOfFocus";
import { WalkThrough } from "./views/WalkThrough";
import { ProjectHistoryOverView } from "./views/ProjectHistoryOverView";

const OnboardContainer = styled.div`
  border: 3px green solid;
  border-radius: 15px;
  height: 100%;
`;

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

  return <OnboardContainer>{CurrentView}</OnboardContainer>;
}
