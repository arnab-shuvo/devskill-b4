import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { userEdit } from "../../store/action/user";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import SaveIcon from "@mui/icons-material/Save";
import { useEffect } from "react";
import { setOpenModal } from "../../store/reducer/loaderReducer";
import { Grid } from "@mui/material";

export const EditUser = ({ allUserDetails, isCurrent, background }) => {
  const dispatch = useDispatch();
  const token = useSelector((store) => store.user.activeUser.token);
  const { address, _id, __v, role, password, ...userInfo } = allUserDetails;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const disableInput = watch("disableInput");

  useEffect(() => {}, [userInfo]);

  return (
    <Grid
      item
      xs={6}
      md={3}
      sx={{
        backgroundImage: background,
      }}
    >
      <Typography variant="h5" component="h2">
        User Information
      </Typography>
      {userInfo &&
        Object.keys(userInfo).map((item) => {
          return (
            <TextField
              fullWidth
              label={item}
              variant="outlined"
              defaultValue={userInfo[`${item}`]}
              {...register(item, {
                required: false,
              })}
              margin="normal"
            />
          );
        })}
      <TextField
        fullWidth
        label="New password"
        type="password"
        disabled={!disableInput}
        variant="outlined"
        {...register("password", {
          required: false,
        })}
        margin="normal"
      />
      <FormControlLabel
        control={<Checkbox {...register("disableInput")} />}
        label="Add new password"
      />
      <Button
        size="medium"
        variant="contained"
        color="primary"
        endIcon={<SaveIcon />}
        onClick={handleSubmit((e) => {
          dispatch(setOpenModal(false));
          dispatch(
            userEdit(
              {
                payload: { ...allUserDetails, ...e },
                id: allUserDetails._id,
                token,
              },
              isCurrent
            )
          );
        })}
      >
        Save Changes
      </Button>{" "}
    </Grid>
  );
};
