import { Box, Tabs, Tab } from "@mui/material";
import React, { SyntheticEvent } from "react";
import TabPanel from "./TabPanel";

type Props = {
    value: number;
    onChange:  (e: SyntheticEvent<Element, Event>, newValue: number) => void; 
    children: React.ReactNode;
};

function TabController({value, onChange, children}: Props) {


  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={onChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Overview"
            id={`tab-control-${0}`}
            aria-controls={`tab-control-${0}`}
          />
          <Tab
            label="Add Steps"
            id={`tab-control-${1}`}
            aria-controls={`tab-control-${1}`}
          />
        </Tabs>
      </Box>
        {children}
    </Box>
  );
}

export default TabController;
