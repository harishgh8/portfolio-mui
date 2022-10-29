import React from "react";
import Typography from "@mui/material/Typography";
import ListOfExperience from "./ListOfExperience";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: 100,
        justifyItems: "left",
        paddingTop: 30,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          paddingTop: 20,
          lineHeight: "150%",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            paddingBottom: 2,
          }}
        >
          {" "}
          About Me
        </Typography>
        <p style={{ lineHeight: "150%", fontSize: 14 }}>
          As a software engineer I focus on building web applications with
          JavaScript technologies across the whole stack (React / Next.js,
          Node.js, Express & MongoDB) & Firebase.
        </p>
        <br />
        <p style={{ lineHeight: "150%", fontSize: 14 }}>
          I am well-versed with software engineering practices like Agile,
          versioning, code quality, release planning and CI/CD.
        </p>
        <br />
        <p style={{ lineHeight: "150%", fontSize: 14 }}>
          My main specialization is in React with JavaScript. For me, this is
          the go-to tool for developing high-quality frontend applications
          powered by a very strong ecosystem and community.
        </p>
      </div>
      <ListOfExperience />
    </div>
  );
};

export default About;
