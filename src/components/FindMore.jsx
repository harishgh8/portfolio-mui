import { Avatar, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";

const FindMore = () => {
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
        <Button
          startIcon={
            <Avatar
              sx={{ width: "20px", height: "auto" }}
              variant="square"
              src={require("../static/images/linkedin.webp")}
            />
          }
          variant="text"
          component="button"
          data-testid="linkedin"
          size="small"
          color="inherit"
          onClick={() =>
            window.open("https://www.linkedin.com/in/harish-g-83b14a235/")
          }
        >
          LinkedIn
        </Button>
        <Button
          startIcon={
            <Avatar
              sx={{ width: "20px", height: "auto" }}
              src={require("../static/images/github.webp")}
            />
          }
          variant="text"
          component="button"
          id="github"
          size="small"
          color="inherit"
          onClick={() => window.open("https://github.com/harishgh8")}
        >
          GitHub
        </Button>
        <Button
          startIcon={
            <Avatar
              variant="square"
              sx={{ width: "20px", height: "auto" }}
              src={require("../static/images/dev-black.webp")}
            />
          }
          variant="text"
          component="button"
          id="dev-to"
          size="small"
          color="inherit"
          onClick={() => window.open("https://dev.to/harishgh8")}
        >
          DEV
        </Button>
      </Box>
    </Box>
  );
};

export default FindMore;
