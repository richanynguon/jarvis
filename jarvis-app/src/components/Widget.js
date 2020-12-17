import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Logo } from "../design-system/icons";
import { WidgetContext } from "../modules/widgetContext";
import { Chat } from "./Chat";
import { Dash } from "./Dash";
import { Onboard } from "./onboard/Onboard";
import whiteLogo from '../assets/logowhite.png'
import * as c from '../design-system/variables/colours'

// Concern that having an overall container instead
// of letting all of the components on the app page
// might not work with the event bubble

const WidgetContainer = styled.div`
  width: 500px;
  height: 100%;
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;
const WidgetIcon = styled.button`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  margin: 20px;
  cursor: pointer;
  background: ${c.PRIMARY_POP_COLOR};
  display:flex;
  justify-content: center;
  align-items:center; 
  box-shadow: rgba(0, 0, 0, 0.16) 0px 5px 40px;
`;
const WidgetPopOutContainer = styled.div`
  min-height: 260px;
  max-height: 790px;
  height: 100%;
  width: 415px;
  margin: 20px;
  margin-bottom: 0px;
  border-radius: 15px;
  overflow: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 5px 40px;
`;

function WidgetPopOut() {
  const { userState } = useContext(WidgetContext);
  let CurrentView = <Onboard />;
  switch (userState.currentView) {
    case 0:
      CurrentView = <Onboard />;
      break;
    case 1:
      CurrentView = <Dash />;
      break;
    case 2:
      CurrentView = <Chat />;
      break;
    default:
      break;
  }
  return (
    <WidgetPopOutContainer>
      {CurrentView}
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
      >
        <Logo src={whiteLogo}/>
      </WidgetIcon>
    </WidgetContainer>
  );
}
