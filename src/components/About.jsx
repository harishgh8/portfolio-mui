import React from "react";
import Typography from "@mui/material/Typography";
import ListOfExperience from "./ListOfExperience";
import { Responsive } from "./Responsive";
import { Box, Divider } from "@mui/material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

const About = () => {
  return (
    <Responsive
      sx={{
        display: "flex",
        justifyContent: "space-between",
        margin: 4,
      }}
    >
      <Box>
        <Typography
          variant="h6"
          sx={{
            paddingBottom: 3,
            paddingTop: 1,
            color: "#484848	",
            display: "flex",
            alignItems: "center",
          }}
        >
          <DescriptionOutlinedIcon /> &nbsp; About Me
        </Typography>
        <Typography sx={{ fontSize: 14 }}>
          As a software engineer I focus on building web applications with
          JavaScript technologies across the whole stack (React / Next.js,
          Node.js, Express & MongoDB) & Firebase.
        </Typography>
        <br />
        <Typography sx={{ fontSize: 14 }}>
          My main specialization is in React with JavaScript. For me, this is
          the go-to tool for developing high-quality frontend applications
          powered by a very strong ecosystem and community.
        </Typography>
        <br />
        <Typography sx={{ fontSize: 14 }}>
          I am well-versed with software engineering practices like Agile,
          versioning, code quality, release planning and CI/CD.
        </Typography>
      </Box>
      {window.innerWidth < 600 ? (
        <Divider sx={{ paddingTop: 2, paddingBottom: 2 }} />
      ) : (
        ""
      )}
      <ListOfExperience />
    </Responsive>
  );
};

export default About;
