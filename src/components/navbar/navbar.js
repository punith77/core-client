import React, { useState } from "react";
import { connect } from "react-redux";
import { MenuOutlined } from "@ant-design/icons";
import ResourceDrawer from "../resourceDrawer";
import { useSelector, useDispatch } from "react-redux";
import { BiSun, BiMoon } from "react-icons/bi";
import { UPDATE_THEME } from "../../constants/actions";

import { Button, Drawer, Switch } from "antd";

import { updateTheme } from "./actions";

function Navbar() {
  const [showResourceDrawer, setShowResourceDrawer] = useState(false);
  const handleResourceDrawer = () => {
    setShowResourceDrawer(!showResourceDrawer);
  };
  const onClose = () => {
    setShowResourceDrawer(false);
  };

  const state = useSelector((state) => state);
  const darkTheme = state.globalState.get("darkTheme");
  const dispatch = useDispatch();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="">Logo</a>
      </div>
      <div>
        <Switch
          checkedChildren={<BiSun />}
          unCheckedChildren={<BiMoon />}
          defaultChecked={false}
          size="small"
          checked={darkTheme}
          onClick={() => dispatch(updateTheme())}
        />
        <Button
          className="barsMenu"
          type="primary"
          onClick={handleResourceDrawer}
        >
          <MenuOutlined />
        </Button>
        <Drawer
          title="Resources"
          placement="right"
          closable={true}
          onClose={onClose}
          visible={showResourceDrawer}
          bodyStyle={{ padding: "0px" }}
          headerStyle={{}}
        >
          <ResourceDrawer />
        </Drawer>
      </div>
    </nav>
  );
}

export default Navbar;
