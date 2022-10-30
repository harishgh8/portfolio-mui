import React from "react";
import Chip from "@mui/material/Chip";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import { Responsive } from "./Responsive";
import CodeIcon from "@mui/icons-material/Code";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";

export default function Skills() {
  const frontEndSkills = [
    "React",
    "Next.Js",
    "JavaScript",
    "node.Js",
    "Jest",
    "TailWind",
    "MUI",
    "Figma",
    "Miro",
  ];
  const backEndSkills = ["Docker", "API development", "Analytics"];
  return (
    <Box>
      <Typography
        variant="h6"
        sx={{
          paddingBottom: 3,
          paddingTop: 3,
          color: "#484848	",
          display: "flex",
          alignItems: "center",
        }}
      >
        <BuildOutlinedIcon /> &nbsp; Skills
      </Typography>
      <Responsive sx={{ display: "flex", gap: 4 }}>
        <Card variant="outlined">
          <CardContent
            sx={{
              display: "flex",
              color: "#505050	",
            }}
          >
            <CodeIcon /> Front End
          </CardContent>
          <Divider variant="center" sx={{ margin: 1 }} />
          {frontEndSkills.map((skill) => (
            <Chip variant="outlined" label={skill} sx={{ margin: 0.5 }} />
          ))}
        </Card>
        <br />
        <Card variant="outlined">
          <CardContent
            sx={{
              color: "#505050	",
              display: "flex",
            }}
          >
            <IntegrationInstructionsIcon /> Back End
          </CardContent>
          <Divider variant="center" sx={{ margin: 1 }} />
          {backEndSkills.map((skill) => (
            <Chip variant="outlined" label={skill} sx={{ margin: 0.5 }} />
          ))}
        </Card>
      </Responsive>
    </Box>
  );
}
