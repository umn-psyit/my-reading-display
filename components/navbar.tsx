import {
  AppBar, Toolbar, makeStyles, Link,
} from '@material-ui/core';
import ThemeChanger from './theme-changer';
import React from 'react';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: '1rem',
  },
  title: {
    flexGrow: 1,
  },
});

interface NavbarProps {
  useDarkTheme: boolean,
  setDarkTheme: (val: boolean) => void
}

export default function Navbar(props: NavbarProps) {
  const {setDarkTheme, useDarkTheme} = props;
  const classes = useStyles();

  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Link href="/" variant="h6" component="a" className={classes.title}>
          My Reading Display
        </Link>

        <ThemeChanger setDarkTheme={setDarkTheme} useDarkTheme={useDarkTheme} />
      </Toolbar>
    </AppBar>
  );
}
