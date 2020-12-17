import { useContext } from "react";
import { Icon } from "../../../design-system/icons";
import { WidgetContext } from "../../../modules/widgetContext";
import { Dialogue, LowOpacityContainer, ViewContainer } from "./ViewsCommonStyles";
import Back from "../../../assets/action_icons/keyboard_arrow_left.svg";
import { Jarvis } from "./Jarvis";
export function CreateProject() {
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
        </Dialogue>
      </LowOpacityContainer>
    </ViewContainer>
    );
  }