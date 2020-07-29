import React from "react";

import {Box, Typography} from "@material-ui/core";

export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} style={{padding:'0'}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}