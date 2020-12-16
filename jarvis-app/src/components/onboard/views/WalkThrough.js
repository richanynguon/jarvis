import { useContext } from "react";
import { WidgetContext } from "../../../modules/widgetContext";

export function WalkThrough() {
    const { userState, setUserState } = useContext(WidgetContext);
    return (
      <div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setUserState({
              ...userState,
              currentView: 1,
              onboardingProgress: userState.onboardingProgress + 1,
            });
          }}
        >
          g
        </button>
      </div>
    );
  }