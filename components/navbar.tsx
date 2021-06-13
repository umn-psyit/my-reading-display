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
                <Link href="/">
                    <Typography variant="h6" className={classes.title}>My Reading Display</Typography>
                </Link>

                <ThemeChanger />
            </Toolbar>
        </AppBar>
        )
    }