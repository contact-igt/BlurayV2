import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
    theme: 'dark' | 'light';
    onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => (
    <button
        type="button"
        aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        onClick={onToggle}
        className="theme-toggle fixed bottom-5 left-5 z-[110] inline-flex h-11 w-11 items-center justify-center border transition-colors duration-150 sm:bottom-6 sm:left-6"
    >
        {theme === 'dark' ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
    </button>
);

export default ThemeToggle;
