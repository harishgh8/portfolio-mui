import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { Button, Typography } from "@mui/material";
import { Responsive } from "./Responsive";

export default function Hero() {
  return (
    <Responsive
      sx={{
        display: "flex",
        gap: 4,
        marginTop: 6,
      }}
    >
      <Box>
        <Avatar
          alt="profile pic"
          src={require("../static/images/prof.png")}
          sx={{ width: 200, height: 200 }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "black", paddingTop: 2, textAlign: "center" }}
        >
          Hi, I'm Harish. A Software Engineer.
        </Typography>
        <Typography sx={{ textAlign: "center" }}>
          Web Developer specialized in building web applications with JavaScript
          technologies.
        </Typography>

        <br />
        <Box sx={{ paddingTop: 4 }}>
          <Button
            variant="outline"
            color="inherit"
            onClick={() =>
              (window.location.href = "mailto:harish.gpa@gmail.com?")
            }
          >
            Contact
          </Button>
        </Box>
      </Box>
    </Responsive>
  );
}
