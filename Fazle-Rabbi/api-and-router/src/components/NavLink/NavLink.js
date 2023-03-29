import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export const NavLink = styled(Link)({
  textDecoration: "none",
  color: "white",
  "&:hover": {
    pointer: "cursor",
  },
});
