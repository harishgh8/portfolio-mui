import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Contact = () => {
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
        Contact
      </Typography>
      <p>Want to get in touch, please contact me, Thanks!</p>
      <Box
        sx={{
          paddingTop: 2,
          "& button": { m: 1 },
        }}
      >
        <Button variant="outlined" size="small" color="inherit">
          send mail
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
