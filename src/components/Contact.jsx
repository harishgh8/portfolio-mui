import { Button, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Contact = () => {
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
            paddingBottom: 1,

            color: "#484848	",
            display: "flex",
            alignItems: "center",
          }}
        >
          <EmailOutlinedIcon /> &nbsp;Contact me
        </Typography>
        <Divider variant="center" />
      </Box>
      <Box>
        <Typography sx={{ fontSize: 14, paddingTop: 2 }}>
          Want to get in touch! please contact me, Thanks.
        </Typography>
      </Box>
      <Box
        sx={{
          paddingTop: 2,
          "& button": { m: 1 },
        }}
      >
        <Button
          variant="outlined"
          size="small"
          color="inherit"
          onClick={() =>
            (window.location.href = "mailto:harish.gpa@gmail.com?")
          }
        >
          send email
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
