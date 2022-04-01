import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { menudata } from "./menuItemdata";

import MenuItemPageCompsitems from "./MenuItemPage.Comps.items";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function MenuItemPageCompsNavs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box
      sx={{
        maxWidth: "425px",
        height: "100%",
        // padding: "0px",
        width: "100%",
      }}
      style={{ backgroundColor: "#E5E5E5" }}
    >
      <Box
        sx={{
          bgcolor: "background.paper",
          borderBottom: 1,
          borderColor: "divider",
          // padding: "10px",
          // width: "100%",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {/* <Tab label="Burger" />
          <Tab label="Momo" />
          <Tab label="Beverage" />
          <Tab label="Coffee" />
          <Tab label="Item Five" />
          <Tab label="Item Six" />
          <Tab label="Item Seven" /> */}
          {menudata.map((label) => {
            return <Tab label={label.itemname} />;
          })}
        </Tabs>
      </Box>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
        className="h-screen overflow-auto "
      >
        {/* <TabPanel value={value} index={0} dir={theme.direction}>
          <MenuItemPageCompsitems />
          <MenuItemPageCompsitems />
          <MenuItemPageCompsitems />
          <MenuItemPageCompsitems />
          <MenuItemPageCompsitems />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <MenuItemPageCompsitems />
          <MenuItemPageCompsitems />
          <MenuItemPageCompsitems />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Item four
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          Item five
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          Item six
        </TabPanel> */}
        {menudata.map((eachdata) => {
          return (
            <TabPanel
              value={value}
              index={eachdata.index}
              dir={theme.direction}
            >
              {eachdata.types.map((itemtype) => {
                return <MenuItemPageCompsitems itemtype={itemtype} />;
              })}
            </TabPanel>
          );
        })}
        <TabPanel value={value} index={5} dir={theme.direction}>
          Item six
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
