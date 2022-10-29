import React from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Skills() {
  return (
    <Box
      sx={{
        paddingTop: 2,
        paddingBottom: 2,
      }}
    >
      <Typography variant="h6">Skills</Typography>
      <Box sx={{ display: "flex", paddingTop: 2 }}>
        <Chip
          avatar={
            <Avatar alt="Natacha" src={require("../static/images/react.png")} />
          }
          label="React"
          variant="outlined"
        />
        <Chip
          avatar={
            <Avatar
              alt="JavaScript"
              src={require("../static/images/javascript.png")}
            />
          }
          label="JavaScript"
          variant="outlined"
        />
        <Chip
          avatar={
            <Avatar alt="Natacha" src={require("../static/images/node.png")} />
          }
          label="Node"
          variant="outlined"
        />
        <Chip
          avatar={
            <Avatar alt="Natacha" src={require("../static/images/jest.png")} />
          }
          label="Jest"
          variant="outlined"
        />
        <Chip
          avatar={
            <Avatar
              alt="Natacha"
              src={require("../static/images/tailwind.png")}
            />
          }
          label="TailWind CSS"
          variant="outlined"
        />
        <Chip
          avatar={
            <Avatar alt="Natacha" src={require("../static/images/mui.png")} />
          }
          label="Material UI"
          variant="outlined"
        />
        <Chip
          avatar={
            <Avatar
              alt="Natacha"
              src={require("../static/images/vscode.png")}
            />
          }
          label="VS Code"
          variant="outlined"
        />
        <Chip
          avatar={
            <Avatar alt="Natacha" src={require("../static/images/mirop.png")} />
          }
          label="Miro"
          variant="outlined"
        />
        <Chip
          avatar={
            <Avatar alt="Natacha" src={require("../static/images/figma.png")} />
          }
          label="Figma"
          variant="outlined"
        />
      </Box>
    </Box>
  );
}
