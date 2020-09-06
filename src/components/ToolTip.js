/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import { useState, useRef } from "react";
import StyledTransition from "./StyledTransition";

const Wrapper = styled.div`
  position: relative;
`;

const Toggler = styled.div`
  background: yellow;
  &:hover {
    cursor: pointer;
  }
`;

/*
const TransitionBox = styled(StyledTransition)`
  opacity: 0;
  background: ${(props) => props.background};
  position: absolute;
`;*/

const ForwardRefComponent = React.forwardRef((props, ref) => (
  <StyledTransition {...props} ref={ref} />
));

const TransitionBox = styled(ForwardRefComponent)`
  opacity: 0;
  background: ${(props) => props.background};
  position: absolute;
`;
const FancyTransitionBox = React.forwardRef((props, ref) => (
  <TransitionBox ref={ref} {...props}>
    {props.children}
  </TransitionBox>
));

const Message = styled.div`
  position: absolute;
  padding: 20px;
  white-space: pre;
  top: 100%;
  transform: translate(-50%);
`;

const ToolTip = (props) => {
  const { message, children } = props;
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);
  const togglerRef = useRef(null);
  const tipRef = React.createRef(null);

  const getOffset = (togglerRef, tipRef) => {
    console.log(tipRef);
    if (togglerRef && togglerRef.current && tipRef && tipRef.current) {
      const el = togglerRef.current;
      const togglerWidth = el.firstChild.offsetWidth;
      const togglerPos = el.getBoundingClientRect();
      console.log("togglerWidth: ", togglerWidth);
      console.log("togglerPos: ", togglerPos);

      const tipEl = tipRef.current;
      const tipWidth = tipEl.firstChild.offsetWidth;
      return {
        left: `${togglerWidth / 2}px`
      };
    }
    return {};
  };
  /*
  const style =
    tRef && tRef.current ? { left: `${tRef.current.offsetWidth / 2}px` } : {};
*/
  const style = getOffset(togglerRef, tipRef);
  return (
    <Wrapper>
      <Toggler ref={togglerRef} onMouseEnter={toggle} onMouseLeave={toggle}>
        {children}
      </Toggler>
      <FancyTransitionBox
        ref={tipRef}
        transitions={{
          enter: css`
            opacity: 0 !important;
          `,
          enterActive: css`
            opacity: 1 !important;
            transition: opacity 1000ms ease-in;
          `,
          enterDone: css`
            opacity: 1 !important;
          `,
          exit: css`
            opacity: 1 !important;
          `,
          exitActive: css`
            opacity: 0 !important;
            transition: opacity 1000ms ease-in;
          `
        }}
        timeout={1000}
        background="rgb(192,53,70)"
        in={isVisible}
      >
        <Message style={style}>{message}</Message>
      </FancyTransitionBox>
    </Wrapper>
  );
};

export { ToolTip };
