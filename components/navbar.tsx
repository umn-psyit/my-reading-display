import { AppBar, Toolbar, IconButton, Typography, makeStyles, Button, Link } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ThemeChanger from '../components/theme-changer';

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
    }
);

export default function Navbar() {
    const classes = useStyles();

    return (
        <AppBar position="static" color="transparent">
            <Toolbar>
                <Link href="/" variant="h6" component={Typography} className={classes.title}>
                    My Reading Display
                </Link>

                {/* <ThemeChanger /> */}
            </Toolbar>
        </AppBar>
        )
    }