import styled from 'styled-components'
import { Logo } from "../../../design-system/icons";
import whiteLogo from "../../../assets/logowhite.png";
import blueLogo from "../../../assets/logoblue.png";

const AnimatedLogo = styled.div`

  width: 100px;
  height: 100px;
  margin: 10px auto;
  @keyframes rotation {
    from {
      opacity: 1;
      transform: rotate(0deg);
    }
    to {
      opacity: 0.5;
      transform: rotate(359deg);
    }
  }

  @keyframes topanimation {
    25% {
      opacity: 0.25;
      transform: rotate(0deg);
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
      transform: rotate(-359deg);
    }
  }
  .whiteLogo {
    position: absolute;
    animation: rotation 30s infinite linear;
    margin: 0 auto;
  }
  .blueLogo {
    margin: 0 auto;
    animation: topanimation 10s infinite;
  }
`;

export function Jarvis() {
  return (
    <AnimatedLogo>
      <Logo src={whiteLogo} className="whiteLogo" />
      <Logo src={blueLogo} className="blueLogo" />
    </AnimatedLogo>
  );
}
