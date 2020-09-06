import React from "react";
import { ToolTip } from "./components/ToolTip";
import { Menu } from "./components/Menu";
import { MenuItem } from "./components/MenuItem";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Menu>
        <ToolTip key="tt-1" message={"Tooltip One"}>
          <MenuItem href="#" title="First One" />
        </ToolTip>
        <ToolTip key="tt-2" message={"Tooltip Two"}>
          <MenuItem href="#" title="Second One" />
        </ToolTip>
      </Menu>
    </div>
  );
}
