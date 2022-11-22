import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import { Box } from "@mui/material";

const companyList = [
  {
    role: "Software Enfineer III",
    name: "Telestream",
    year: "2022-",
    logo: "../static/images/telestream.webp",
  },
  {
    role: "Front End Developer",
    name: "HP Inc.",
    year: "2022",
    logo: "../static/images/hp.webp",
  },
  {
    role: "Software Developer",
    name: "Scotiabank",
    year: "2020-2022",
    logo: "../static/images/scotia.webp",
  },
  {
    role: "Software Developer",
    name: "GE India",
    year: "2017-2020",
    logo: "../static/images/GE.webp",
  },
];
export default function ListOfExperience() {
  return (
    <Box
      sx={{
        minWidth: "240px",
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
      }}
    >
      <Box>
        <Typography
          variant="h6"
          sx={{
            paddingTop: 1,
            color: "#484848	",
            display: "flex",
            alignItems: "center",
          }}
        >
          <BadgeOutlinedIcon /> &nbsp;Experience
        </Typography>
      </Box>
      <Box>
        {companyList.map((company) => (
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            key={company.year}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={company.name} src={company.logo} />
              </ListItemAvatar>
              <ListItemText
                primary="Front End Developer"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {company.name}
                    </Typography>
                    <Typography style={{ fontSize: 12 }}>
                      {company.year}-
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        ))}
      </Box>
    </Box>
  );
}
