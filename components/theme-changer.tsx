import {useTheme} from 'next-themes';
import {useEffect, useState} from 'react';
import {IconButton} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSun, faMoon} from '@fortawesome/free-solid-svg-icons';
import {useRouter} from 'next/router';

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const {theme, setTheme} = useTheme();
  const router = useRouter();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const onChangeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  if (theme === 'light' || theme === undefined) {
    return (
      <div>
        <IconButton onClick={onChangeTheme} aria-label="switch to dark mode">
          <FontAwesomeIcon icon={faMoon} />
        </IconButton>
      </div>
    );
  }

  return (
    <div>
      <IconButton onClick={onChangeTheme} aria-label="switch to light mode">
        <FontAwesomeIcon icon={faSun} />
      </IconButton>
    </div>
  );
};

export default ThemeChanger;
