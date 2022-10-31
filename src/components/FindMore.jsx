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
            paddingTop: 3,
            color: "#484848	",
            display: "flex",
            alignItems: "center",
          }}
        >
          <PersonSearchOutlinedIcon /> &nbsp; Find more about me
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
              src={require("../static/images/linkedin.png")}
            />
          }
          variant="text"
          component="button"
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
              src={require("../static/images/github.png")}
            />
          }
          variant="text"
          size="small"
          color="inherit"
          onClick={() => window.open("https://github.com/harishgh8")}
        >
          GitHub
        </Button>
      </Box>
    </Box>
  );
};

export default FindMore;
