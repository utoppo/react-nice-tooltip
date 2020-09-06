import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { CSSTransition } from "react-transition-group";

const has = (key, obj) => Object.prototype.hasOwnProperty.call(obj, key);

const keyframes = [
  "appear",
  "enter",
  "exit",
  "appear-active",
  "enter-active",
  "exit-active",
  "appear-done",
  "enter-done",
  "exit-done"
];

const ForwardRefComponent = React.forwardRef((props, ref) => (
  <CSSTransition {...props} ref={ref} />
));

const StyledTransition = styled(({ transitions, className, ...props }) => (
  <ForwardRefComponent
    className={className}
    classNames={className}
    {...props}
  />
))`
  ${({ transitions }) =>
    keyframes
      .map((keyframe) => {
        const objectKey = keyframe.replace(/(-[a-z])/, (v) =>
          v.slice(1).toUpperCase()
        );
        if (has(objectKey, transitions)) {
          return css`
            &-${keyframe} {
              ${transitions[objectKey]}
            }
          `;
        }
        return null;
      })
      .filter((x) => x !== null)}
`;

const FancyStyledTransition = React.forwardRef((props, ref) => (
  <StyledTransition ref={ref} {...props}>
    {props.children}
  </StyledTransition>
));

export default FancyStyledTransition;
