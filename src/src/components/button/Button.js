import {
  Menu,
  MenuItem,
  Button as MuiButton,
  makeStyles,
} from "@material-ui/core";
import clsx from "clsx";
import React, { useState } from "react";

const useStyles = makeStyles({
  root: {},
});

const Button = React.forwardRef(
  ({ children, className, menuProps, onClick, ...rest }, ref) => {
    let childrenArray = React.Children.toArray(children).flat();
    childrenArray = React.Children.map(children, (c) => {
      if (c.type === MenuItem) {
        const originalOnClick = c.props.onClick;

        return React.cloneElement(c, {
          onClick: (e) => {
            typeof originalOnClick == "function" && originalOnClick(e);
            setMenuAnchor(null);
          },
        });
      } else {
        return c;
      }
    });

    const classes = useStyles(),
      menuItems = childrenArray.filter((x) => x.type === MenuItem),
      hasMenuItems = Boolean(menuItems.length);

    const [menuAnchor, setMenuAnchor] = useState(null),
      menu = hasMenuItems ? (
        <Menu
          anchorEl={menuAnchor}
          getContentAnchorEl={null}
          open={Boolean(menuAnchor)}
          keepMounted
          {...menuProps}
          onClose={() => setMenuAnchor(null)}
        >
          {menuItems}
        </Menu>
      ) : null;

    const handleClick = (e) => {
      setMenuAnchor(e.currentTarget);
      typeof onClick == "function" && onClick(e);
    };

    return (
      <>
        <MuiButton
          variant="outlined"
          className={clsx(classes.root, className)}
          onClick={handleClick}
          ref={ref}
          {...rest}
        >
          {childrenArray.filter((x) => !menuItems.includes(x))}
        </MuiButton>
        {menu}
      </>
    );
  }
);

export default Button;
