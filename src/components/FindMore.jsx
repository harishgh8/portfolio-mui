import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const FindMore = () => {
  return (
    <Box
      sx={{
        paddingTop: 2,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          paddingBottom: 2,
        }}
      >
        Find more about me
      </Typography>
      <Box
        sx={{
          "& button": { m: 1 },
        }}
      >
        <Button variant="outlined" size="small" color="inherit">
          LinkedIn
        </Button>
        <Button variant="outlined" size="small" color="inherit">
          GitHub
        </Button>
      </Box>
    </Box>
  );
};

export default FindMore;
