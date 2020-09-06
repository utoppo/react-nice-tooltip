import React from "react";
import styled from "@emotion/styled";

const StyledMenuItem = styled.a`
  display: flex;
  width: 60px;
  height: 60px;

  background: white;
  text-decoration: none;
  line-height: 1.5;
  align-content: center;
  justify-content: space-between;
  align-items: center;

  display: block;
  margin: 0 30px 0 0;
`;

const MenuItem = (props) => {
  const { href, title } = props;
  return (
    <StyledMenuItem key={title} href={href} title={title}>
      {title}
    </StyledMenuItem>
  );
};

export { MenuItem };
