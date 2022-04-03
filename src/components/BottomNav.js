import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import BottomNavButton from "./BottomNavButton";
import FooterCompsYourOrders from "./Footer.Comps.YourOrders";
import Drawer from "@mui/material/Drawer";

export default function BottomNav() {
  const [state, setState] = React.useState({
    bottom: false,
  });

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

  const [footerdata, setFooterData] = React.useState([
    { id: 1, itemname: "Chicken Ham-Burger", priceperitem: 500, noofitems: 1 },
    {
      id: 2,
      itemname: "Veg-pizza",
      priceperitem: 500,
      noofitems: 1,
      size: "small",
    },
    { id: 3, itemname: "Buff Steam Momo", priceperitem: 500, noofitems: 1 },
    {
      id: 4,
      itemname: "Gurkhas and Guns",
      priceperitem: 500,
      noofitems: 1,
      liter: "60ml",
    },
    { id: 5, itemname: "French Fries", priceperitem: 500, noofitems: 1 },
  ]);

  const handleDelete = (deleteId) => {
    const data = footerdata.filter((eachdata) => {
      return eachdata.id != deleteId;
    });
    setFooterData(data);
    console.log(data);
  };

  return (
    <div className="m-0 p-0">
      <React.Fragment key={"bottom"}>
        {/* <Button onClick={toggleDrawer("bottom", true)}>{"bottom"}</Button> */}
        <BottomNavButton toggleDrawer={toggleDrawer} />
        <Drawer
          anchor={"bottom"}
          open={state["bottom"]}
          onClose={toggleDrawer("bottom", false)}
          onOpen={toggleDrawer("bottom", true)}
          //   sx={{ width: "425px" }}
          elevation={2}
          transitionDuration={500}
        >
          <FooterCompsYourOrders
            data={footerdata}
            // yourcart={yourcart}
            toggleDrawer={toggleDrawer}
            handleDelete={handleDelete}
          />
        </Drawer>
      </React.Fragment>
    </div>
  );
}
