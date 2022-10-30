import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Responsive } from "./Responsive";

const FindMore = () => {
  return (
    <Responsive>
      <Box>
        <Typography
          variant="h6"
          sx={{
            paddingBottom: 3,
            paddingTop: 3,
          }}
        >
          Find more about me
        </Typography>
      </Box>
      <Box
        sx={{
          "& button": { m: 1 },
        }}
      >
        <Button
          variant="outlined"
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
          variant="outlined"
          size="small"
          color="inherit"
          onClick={() => window.open("https://github.com/harishgh8")}
        >
          GitHub
        </Button>
      </Box>
    </Responsive>
  );
};

export default FindMore;
