import { StyledLink } from "./styled";

const Anchor = ({ children, to }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

export default Anchor;