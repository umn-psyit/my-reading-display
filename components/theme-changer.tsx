import {useEffect, useState} from 'react';
import {IconButton, Button, makeStyles, createStyles} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSun, faMoon} from '@fortawesome/free-solid-svg-icons';
import React, {FC} from 'react';


const useStyles = makeStyles(() =>
  createStyles({
    outlined: {
      padding: '0.5em',
      minWidth: '0',
      marginLeft: '0.5em'
    },
    iconButton: {
      padding: '0',
      backgroundColor: 'transparent',
      "&:hover": {
        backgroundColor: 'transparent'
    }
    }
  }));

const lightButtonClasses = makeStyles(() =>
  createStyles({
    root: {
      color: '#000'
    }
  }))

const darkButtonClasses = makeStyles(() =>
  createStyles({
    root: {
      color: '#FFF'
    }
  }))

interface ThemeChangerProps {
    useDarkTheme: boolean,
    setDarkTheme: (val: boolean) => void
}

const ThemeChanger = (props: ThemeChangerProps) => {
  const {setDarkTheme, useDarkTheme} = props;
  const [mounted, setMounted] = useState(false);
  const classes = useStyles();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const onChangeTheme = () => {
    localStorage.setItem('mrd-theme', String(!useDarkTheme));
    setDarkTheme(!useDarkTheme); // switches matieral-ui theme
  };

  const ChangeButton: FC = ({children}) => {
    return <Button variant="outlined" className={classes.outlined} onClick={onChangeTheme} disableElevation>
      {/* <IconButton disableRipple disableFocusRipple className={classes.iconButton} size="small"> */}
      {children}
      {/* </IconButton> */}
    </Button>
  }

  if (useDarkTheme) {
    return (
      <ChangeButton aria-label="switch to light mode">
        <FontAwesomeIcon icon={faSun} />
      </ChangeButton>
    );
  }

  return (
    <ChangeButton aria-label="switch to dark mode">
      <FontAwesomeIcon icon={faMoon} />
    </ChangeButton>
  );
};

export default ThemeChanger;
