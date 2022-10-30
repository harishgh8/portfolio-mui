import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";

export default function ListOfExperience() {
  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem>
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
        </ListItem>

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={require("../static/images/hp.png")} />
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
                  HP Inc.
                </Typography>
                <Typography style={{ fontSize: 12 }}>2022-</Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Travis Howard"
              src={require("../static/images/scotia.png")}
            />
          </ListItemAvatar>
          <ListItemText
            primary="Software Developer"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Scotiabank
                </Typography>
                <Typography style={{ fontSize: 12 }}>2020-2022</Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Cindy Baker"
              src={require("../static/images/GE.png")}
            />
          </ListItemAvatar>
          <ListItemText
            primary="Software Developer"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  GE, India
                </Typography>
                <Typography style={{ fontSize: 12 }}>2017-2020</Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </>
  );
}
