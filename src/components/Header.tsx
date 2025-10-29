import { Moon, Sun } from 'lucide-react';

interface HeaderProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export default function Header({ theme, toggleTheme }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      theme === 'dark' ? 'bg-black/80' : 'bg-white/80'
    } backdrop-blur-md`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold tracking-tighter">
            <span className={theme === 'dark' ? 'text-white' : 'text-black'}>imnots</span>
            <span className="text-[#FFB800]"> studios</span>
          </div>
        </div>

        <ul className="hidden md:flex space-x-8 items-center">
          {['home', 'equipe', 'projetos', 'contato'].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className={`text-sm uppercase tracking-wider transition-all duration-300 hover:text-[#FFB800] hover:text-glow ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-all duration-300 hover:bg-[#FFB800]/20 ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>
    </header>
  );
}
