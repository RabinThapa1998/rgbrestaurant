import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import BottomNavButton from "./BottomNavButton";
import FooterCompsYourOrders from "./Footer.Comps.YourOrders";
import Drawer from "@mui/material/Drawer";
import { deleteAction } from "../reducers/CounterReducer";
import { useDispatch, useSelector } from "react-redux";

export default function BottomNav() {
  let { numberofItems } = useSelector((state) => state.counter);
  console.log("numberofItems", numberofItems);
  const [state, setState] = React.useState({
    bottom: false,
  });
  const dispatch = useDispatch();

  const toggleDrawer = (anchor, open) => (event) => {
    console.log("toggle");
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleDelete = (deleteId) => {
    dispatch(deleteAction(deleteId));
  };

  return (
    <div className="m-0 p-0">
      <React.Fragment key={"bottom"}>
        <BottomNavButton
          toggleDrawer={toggleDrawer}
          numberofItems={numberofItems}
        />
        <Drawer
          anchor={"bottom"}
          open={state["bottom"]}
          onClose={toggleDrawer("bottom", false)}
          onOpen={toggleDrawer("bottom", true)}
          elevation={2}
          transitionDuration={500}
        >
          <FooterCompsYourOrders
            toggleDrawer={toggleDrawer}
            handleDelete={handleDelete}
          />
        </Drawer>
      </React.Fragment>
    </div>
  );
}
