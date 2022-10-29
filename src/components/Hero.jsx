import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 4,
        marginTop: 4,
        marginBottom: 4,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "left" }}>
        <Avatar
          alt="profile pic"
          src={require("../static/images/profpic.png")}
          sx={{ width: 200, height: 200 }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "left",
          paddingTop: 2,
        }}
      >
        <Typography variant="h4" sx={{ color: "black" }}>
          Hi, I'm Harish. <br />A Software Engineer.
        </Typography>
        <Typography variant="p" sx={{ lineHeight: "150%" }}>
          Web Developer specialized in building web
          <p>applications with JavaScript technologies.</p>
        </Typography>
        <br />
        <Typography variant="p">Contact </Typography>
      </Box>
    </Box>
  );
}
