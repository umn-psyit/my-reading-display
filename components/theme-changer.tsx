import {useEffect, useState} from 'react';
import {IconButton} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSun, faMoon} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

interface ThemeChangerProps {
    useDarkTheme: boolean,
    setDarkTheme: (val: boolean) => void
}

const ThemeChanger = (props: ThemeChangerProps) => {
  const {setDarkTheme, useDarkTheme} = props;
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const onChangeTheme = () => {
    localStorage.setItem('mrd-theme', String(!useDarkTheme));
    setDarkTheme(!useDarkTheme); // switches matieral-ui theme
  };

  if (useDarkTheme) {
    return (
      <div>
        <IconButton onClick={onChangeTheme} aria-label="switch to light mode">
          <FontAwesomeIcon icon={faSun} />
        </IconButton>
      </div>
    );
  }

  return (
    <div>
      <IconButton onClick={onChangeTheme} aria-label="switch to dark mode">
        <FontAwesomeIcon icon={faMoon} />
      </IconButton>
    </div>
  );
};

export default ThemeChanger;
