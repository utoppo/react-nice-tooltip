import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 60px;
  background: #edeef5;
`;

const Item = styled.a`
  display: flex;
  width: 60px;
  height: 60px;
`;

const Menu = (props) => {
  const { children } = props;
  return <Wrapper>{children}</Wrapper>;
};

export { Menu };
