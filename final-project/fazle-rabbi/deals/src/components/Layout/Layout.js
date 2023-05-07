import React from "react";
import Navbar from "../Navbar/Navbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Footer from "../Footer/Footer";
import Snackbar from "@mui/material/Snackbar";
import { useDispatch, useSelector } from "react-redux";
import { setToast } from "../../store/reducer/loaderReducer";
import Divider from "@mui/material/Divider";

export default function Layout({ children, title }) {
  document.title = title;

  const dispatch = useDispatch();
  const toast = useSelector((store) => store.loader.toast);

  const handleClose = () => dispatch(setToast(""));
  return (
    <Box>
      <Navbar />
      <Typography ml={2} mt={2} gutterBottom paragraph variant="h6">
        {title}
      </Typography>
      {children}
      <Divider sx={{ mt: 20, mb: 4 }} />
      <Footer sx={{ mb: 4 }} />
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={3000}
        open={toast !== ""}
        onClose={handleClose}
        message={toast}
        key={"bottom-center"}
      />
    </Box>
  );
}
