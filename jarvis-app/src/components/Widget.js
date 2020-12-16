import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { WidgetContext } from "../modules/widgetContext";
import { Chat } from "./Chat";
import { Onboard } from "./Onboard/Onboard.js";

// Concern that having an overall container instead
// of letting all of the components on the app page
// might not work with the event bubble

const WidgetContainer = styled.div`
  width: 500px;
  height: 900px;
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;
const WidgetIcon = styled.div`
  border: 1px red solid;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  margin: 20px;
  cursor: pointer;
`;
const WidgetPopOutContainer = styled.div`
  border: 1px red solid;
  width: 375px;
  height: 700px;
  margin: 20px;
  margin-bottom: 0px;
  border-radius: 15px;
`;

function WidgetPopOut() {
  const { userState } = useContext(WidgetContext);
  return (
    <WidgetPopOutContainer>
      {userState.onboardingComplete ? <Chat /> : <Onboard />}
    </WidgetPopOutContainer>
  );
}

export function Widget() {
  const [isExpanded, SetIsExpanded] = useState(false);
  useEffect(() => {}, [isExpanded]);
  return (
    <WidgetContainer>
      {isExpanded ? <WidgetPopOut /> : ""}
      <WidgetIcon
        onClick={() => {
          SetIsExpanded(!isExpanded);
        }}
      />
    </WidgetContainer>
  );
}
