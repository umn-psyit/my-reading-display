import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ThemeChanger = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    if (theme === 'light' || theme === undefined) {
        return (
            <div>
                <IconButton onClick={() => setTheme('dark')} aria-label="switch to dark mode">
                    <FontAwesomeIcon icon={faMoon} />
                </IconButton>
            </div>
        )
    }

    return (
        <div>
            <IconButton onClick={() => setTheme('light')} aria-label="switch to light mode">
                <FontAwesomeIcon icon={faSun} />
            </IconButton>
        </div>
    )
}

export default ThemeChanger;