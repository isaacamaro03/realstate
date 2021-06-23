import { Link as MuiLink } from "@material-ui/core";

const Link = ({ children, ...rest }) => (
  <MuiLink color="inherit" underline="none" {...rest}>
    {children}
  </MuiLink>
);

export default Link;
