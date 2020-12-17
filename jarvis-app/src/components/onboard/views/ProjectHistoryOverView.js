import { useContext } from "react";
import { WidgetContext } from "../../../modules/widgetContext";
import styled from "styled-components";
import { ViewContainer } from "./ViewsCommonStyles";
import { Icon } from "../../../design-system/icons";
import Back from "../../../assets/action_icons/keyboard_arrow_left.svg";


export function ProjectHistoryOverView() {
    const { userState, setUserState } = useContext(WidgetContext);
    return (
      <ViewContainer>
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
      </ViewContainer>
    );
  }