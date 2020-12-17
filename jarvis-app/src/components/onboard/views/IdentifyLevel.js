import { useContext, useRef, useState } from "react";
import { WidgetContext } from "../../../modules/widgetContext";
import styled from "styled-components";
import background from "../../../assets/background.png";
import { Icon } from "../../../design-system/icons";
import Forward from "../../../assets/action_icons/keyboard_arrow_right.svg";
import Back from "../../../assets/action_icons/keyboard_arrow_left.svg";
import { H1, H2, H3, H4, H5 } from "../../../design-system/typography";
import { Jarvis } from "./Jarvis";
import { Button } from "../../../design-system/buttons";
import * as c from "../../../design-system/variables/colours";
const LevelContainer = styled.div`
  background-image: ${(props) => `url(${background})`};
  background-repeat: none;
  background-size: cover;
  height: 100%;
  width: 100%;
  border-radius: 15px;
`;

const LowOpacityContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 15px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const Dialogue = styled.div`
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

// TRBL
const ToolTipContainer = styled.div`
  background: rgba(255, 255, 255, 0.8);
  display: inline-block;
  color: ${c.DARK_NEUTRAL_COLOR};

  white-space: nowrap;
  padding: 0px 5px 0px 5px;
  border-radius: 5px;
`;

export const ToolTip = styled.span`
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  position: absolute;
  top: ${(props) => (props.y === 0 ? 0 : `${props.y}px`)};
  left: ${(props) => (props.x === 0 ? 0 : `${props.x}px`)};
`;

function ToolTipButton({ buttonTitle, description, tipRef }) {
  const { userState, setUserState } = useContext(WidgetContext);

  const [mousePos, setMousePos] = useState({ x: null, y: null });
  const [visible, setVisible] = useState(false);

  const currRef = useRef(null);

  const { x, y } = mousePos;

  const onHover = (e) => {
    const { offsetLeft, offsetTop, offsetParent } = currRef.current;
    const tipWidth = tipRef.current.lastChild.offsetWidth;
    const { offsetHeight, offsetWidth } = offsetParent;
    const icon = e.target.getBoundingClientRect();
    const x =
      offsetLeft + e.pageX - icon.left < offsetWidth - tipWidth
        ? offsetLeft + e.pageX - icon.left
        : offsetWidth - tipWidth;
    const y =
      offsetTop + e.pageY - icon.top - 25 < offsetHeight
        ? offsetTop + e.pageY - icon.top - 25
        : offsetHeight;
    setMousePos({ x, y });
  };

  return (
    <ToolTipContainer ref={tipRef}>
      <Button
        onClick={(e) => {
          e.stopPropagation();
          setUserState({
            ...userState,
            onboardingProgress: userState.onboardingProgress + 1,
          });
        }}
        ref={currRef}
        onMouseOver={(e) => {
          e.stopPropagation();
          onHover(e);
          setVisible(true);
        }}
        onMouseLeave={(e) => {
          e.stopPropagation();
          setVisible(false);
        }}
      >
        <H5 LIGHT>{buttonTitle}</H5>
      </Button>
      <ToolTip
        x={x}
        y={y}
        visible={visible}
        onMouseOver={(e) => {
          e.stopPropagation();
        }}
      >
        <ToolTipContainer>
          <H5>{description}</H5>
        </ToolTipContainer>
      </ToolTip>
    </ToolTipContainer>
  );
}

export function IdentifyLevel() {
  const { userState, setUserState } = useContext(WidgetContext);
  const tipRef = useRef(null);
  return (
    <LevelContainer>
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
          <H3> A new assistant! 🎉</H3>
          <H4>
            So my little lamb, what kind of tasks can I delegate to you? I only
            have embedded projects available at this time.
          </H4>
          <ButtonGroup ref={tipRef}>
            <ToolTipButton
              onClick={() => {
                setUserState({
                  ...userState,
                  userLevel: "Beginner",
                });
              }}
              buttonTitle="Beginner Skill"
              description="0-3 projects of experience"
              tipRef={tipRef}
            />
            <ToolTipButton
              onClick={() => {
                setUserState({
                  ...userState,
                  userLevel: "Moderate",
                });
              }}
              buttonTitle="Moderate Skill"
              tipRef={tipRef}
              description="3-5 projects of experience"
            />
            <ToolTipButton
              onClick={() => {
                setUserState({
                  ...userState,
                  userLevel: "High",
                });
              }}
              buttonTitle="High Skill"
              tipRef={tipRef}
              description="5+ projects of experience"
            />
          </ButtonGroup>
        </Dialogue>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setUserState({
              ...userState,
              onboardingProgress: userState.onboardingProgress + 1,
            });
          }}
        >
          <Icon src={Forward} />
        </button>
      </LowOpacityContainer>
    </LevelContainer>
  );
}
