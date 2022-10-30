import { styled } from "@mui/material/styles";
export const Responsive = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
    overflowWrap: "break-word",
  },
}));
