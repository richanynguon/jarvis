import { useContext } from "react";
import { WidgetContext } from "../../../modules/widgetContext";

export function IdentifyLevel() {
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