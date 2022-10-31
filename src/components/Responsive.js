import { styled } from "@mui/material/styles";
export const Responsive = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    padding: 6,
    overflowWrap: "break-word",
  },
}));

export const ResponsiveBox = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
    textAlign: "center",
  },
}));
