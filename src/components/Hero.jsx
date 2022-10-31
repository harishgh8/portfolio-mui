import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { Link, Typography } from "@mui/material";
import { Responsive } from "./Responsive";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export default function Hero() {
  return (
    <Responsive
      sx={{
        display: "flex",
        gap: 2,
        marginTop: 6,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: 4,
        }}
      >
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

          textAlign: "left",
          margin: 4,
        }}
      >
        <Typography variant="h4" sx={{ color: "#484848	", paddingTop: 2 }}>
          Hi, I'm Harish. A Software Engineer.
        </Typography>
        <Typography sx={{}}>
          Web Developer specialized in building web applications with JavaScript
          technologies.
        </Typography>

        <br />
        <Box>
          <Link
            component="button"
            variant="body2"
            color="inherit"
            onClick={() => {
              window.location.href = "mailto:harish.gpa@gmail.com?";
            }}
            sx={{
              display: "flex",
              justifyItems: "center",
            }}
          >
            <EmailOutlinedIcon sx={{ width: "auto", height: 19 }} />
            Contact me
          </Link>
        </Box>
      </Box>
    </Responsive>
  );
}
