import { useContext } from "react";
import styled from "styled-components";
import { WidgetContext } from "../modules/widgetContext";
import * as c from "../design-system/variables/colours";

const ChatContainer = styled.div`
  border: 3px blue solid;
  border-radius: 15px;
  height: 100%;
  overflow: none;
`;

//TRBL
const Navigation = styled.div`
  width: 100%;
  border-radius: 15px 15px 0px 0px;
  height: 115px;
  background: ${c.PRIMARY_POP_COLOR};
`;

export function Chat() {
  const { userState, setUserState } = useContext(WidgetContext);
  return (
    <ChatContainer>
      <Navigation>
        <button
          onClick={() => {
            setUserState({ ...userState, currentView: 1 });
          }}
        >
          Back
        </button>
      </Navigation>
    </ChatContainer>
  );
}

/*
Create REPL
MVP: 
Give Recommendation based on experience level, age, and interests
Gives a customizable form that links parts and it adjusts total costs
Do you want to save this project?
*/
