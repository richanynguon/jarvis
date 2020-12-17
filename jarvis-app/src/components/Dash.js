import styled from "styled-components";
import { InvertButton } from "../design-system/buttons";
import { Icon, Logo } from "../design-system/icons";
import send from "../assets/action_icons/send.svg";
import { H1, H5 } from "../design-system/typography";
import * as c from "../design-system/variables/colours";
import { useContext } from "react";
import { WidgetContext } from "../modules/widgetContext";
import whiteLogo from '../assets/logowhite.png'
const DashContainer = styled.div`
  border-radius: 15px;
  height: 100%;
  overflow-y: scroll;
`;
const Banner = styled.div`

  width: 100%;
  border-radius: 15px 15px 0px 0px;
  height: 290px;
  background: ${c.PRIMARY_POP_COLOR};
  z-index: -10;
  position: fixed;
  width: 415px;
`;

const Feed = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  width: 375px;
  align-items: center;
  margin: 0 auto;
  height: 1700px;
  .logo {
    align-self: left;
  }
`;

const Component = styled.div`
  background: white;
  height: 100px;
  width: 350px;
`;
export function Dash() {
  const { userState, setUserState } = useContext(WidgetContext);
  return (
    <DashContainer>
      <Banner />
      <Feed>
        <Logo src={whiteLogo}/>
        <H1>Hi</H1>
        <Component>
          <InvertButton
            onClick={() => {
              setUserState({ ...userState, currentView: 2 });
            }}
          >
            <Icon primary src={send} />
            <H5 color={c.PRIMARY_POP_COLOR}>Create Project</H5>
          </InvertButton>
        </Component>
      </Feed>
    </DashContainer>
  );
}
