import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { Link, Typography } from "@mui/material";
import { Responsive, ResponsiveBox } from "./Responsive";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export default function Hero() {
  return (
    <Responsive
      sx={{
        display: "flex",
        padding: 2,
        gap: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 1,
        }}
      >
        <Avatar
          alt="profile pic"
          fetchpriority="high"
          src={require("../static/images/prof.webp")}
          sx={{ width: 200, height: 200 }}
        />
      </Box>

      <ResponsiveBox
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "left",
          padding: 1,
        }}
      >
        <Typography variant="h4" sx={{ color: "#484848" }}>
          Hi, I'm Harish. <br />A Software Developer.
        </Typography>
        <Typography sx={{}}>
          Specialized in building web applications with JavaScript technologies.
        </Typography>

        <br />
        <Box
          sx={{
            display: "flex",
          }}
        >
          {" "}
          <EmailOutlinedIcon sx={{ width: "auto", height: 19 }} /> &nbsp;
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
            Contact me
          </Link>
        </Box>
      </ResponsiveBox>
    </Responsive>
  );
}
