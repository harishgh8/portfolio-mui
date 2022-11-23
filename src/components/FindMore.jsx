import { Avatar, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";

const FindMore = () => {
  const externalLinks = [
    {
      name: "LinkedIn",
      logoName: "linkedin",
      url: "https://www.linkedin.com/in/harish-g-83b14a235/",
    },
    {
      name: "GitHub",
      logoName: "github",
      url: "https://www.linkedin.com/in/harish-g-83b14a235/",
    },
    {
      name: "DEV",
      logoName: "dev-black",
      url: "https://www.linkedin.com/in/harish-g-83b14a235/",
    },
  ];
  return (
    <Box
      sx={{
        padding: 4,
      }}
    >
      <Box>
        <Typography
          variant="h6"
          sx={{
            paddingBottom: 3,

            color: "#484848	",
            display: "flex",
            alignItems: "center",
          }}
        >
          <PersonSearchOutlinedIcon />
          Find more about me
        </Typography>
      </Box>
      <Box
        sx={{
          "& button": { m: 1 },
        }}
      >
        {externalLinks.map((external) => (
          <Button
            key={external.name}
            startIcon={
              <Avatar
                sx={{ width: "20px", height: "auto" }}
                variant="square"
                src={require("../static/images/" + external.logoName + ".webp")}
              />
            }
            variant="text"
            component="button"
            size="small"
            color="inherit"
            onClick={() => window.open(external.url)}
          >
            {external.name}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default FindMore;
