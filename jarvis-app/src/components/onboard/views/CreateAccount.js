import { useContext } from "react";
import { WidgetContext } from "../../../modules/widgetContext";

export function CreateAccount() {
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
      <button
        onClick={() => {
          setUserState({ ...userState, currentView: 1 });
        }}
      >
        I have an account
      </button>
    </div>
  );
}
