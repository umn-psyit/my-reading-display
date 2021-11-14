import {
  AppBar, Box, Button, Container, Hidden, IconButton, Toolbar, makeStyles, Link,
  Drawer, createStyles, Theme, List, ListItem
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import ThemeChanger from './theme-changer';
import React from 'react';

class PageInfo {
  slug: string;
  name: string;

  constructor(slug: string, name: string) {
      this.slug = slug;
      this.name = name;
  }
}

const PAGES = [
  new PageInfo('background', 'Background'),
  new PageInfo('calculator', 'Calculator'),
];

const useStyles = makeStyles(() =>
  createStyles({
    bar: {
      // zIndex: 100
    },
    root: {
      display: 'flex'
    },
    menuButton: {
      margin: '0 0.5rem',
    },
    titleBox: {
      flexGrow: 1,
    },
    title: {
      // flexGrow: 1,
      // zIndex: 10
      color: 'inherit'
    },
    menuItems: {
      marginRight: '0',
      marginLeft: 'auto',
      flexGrow: 0
    },
    mobile_menu: {
      color: 'inherit'
    },
    drawerItem: {
      // justifyContent: 'right'
    }
}));

interface NavbarProps {
  useDarkTheme: boolean,
  setDarkTheme: (val: boolean) => void
}

export default function Navbar(props: NavbarProps) {
  const {setDarkTheme, useDarkTheme} = props;
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    if (open === true) {
        setOpen(false);
    }
    else {
        setOpen(true);
    }
  };
  
  return (
    <Box className={classes.root} style={{zIndex: 1201}}>
      <AppBar color="inherit" style={{zIndex: 1202}}>
        <Container maxWidth="lg" style={{marginLeft: 'auto'}}>
          <Toolbar style={{padding: '0'}}>
              <Link href="/" variant="h6" component="a" className={classes.title} underline="always">
                My Reading Display
              </Link>

            <Box className={classes.menuItems}>
                <Hidden mdUp>
                    <IconButton onClick={handleDrawerToggle} edge="start" color="inherit" aria-label="menu" className={classes.mobile_menu}> 
                        {open ? <CloseIcon /> : <MenuIcon />}
                    </IconButton>
                </Hidden>
                <Hidden smDown>
                    {PAGES.map((page) => {
                        return (
                            <Link key={page.slug} href={page.slug}>
                                <Button disableElevation className={classes.menuButton} color="primary" variant="contained">{page.name}</Button>
                            </Link>
                        );
                    })}
                    <ThemeChanger setDarkTheme={setDarkTheme} useDarkTheme={useDarkTheme} />
                </Hidden>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
      <Hidden mdUp>
        <Box>
            <Drawer open={open} variant="persistent" anchor="top">
                <Toolbar />
                <List>
                    {PAGES.map((page) => {
                        return (
                            <ListItem key={page.slug} className={classes.drawerItem}>
                                <Link href={page.slug}>
                                    <Button onClick={handleDrawerToggle}>{page.name}</Button>
                                </Link>
                            </ListItem>
                        );
                    })}
                    <ListItem className={classes.drawerItem}>
                      <ThemeChanger setDarkTheme={setDarkTheme} useDarkTheme={useDarkTheme} />
                    </ListItem>
                </List>
            </Drawer>
        </Box>
      </Hidden>
    </Box>
  );
}
