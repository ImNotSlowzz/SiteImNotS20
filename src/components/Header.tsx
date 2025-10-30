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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        theme === 'dark' ? 'bg-black/80' : 'bg-white/80'
      } backdrop-blur-md`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO + NOME */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
          {/* Logo da empresa */}
          <img
            src="/photos/SYNC.png" // substitua pelo caminho da sua logo
            alt="ImNot’S Studios"
            className="w-10 h-10 object-contain"
          />
          {/* Nome da empresa */}
          <div className="text-2xl font-bold tracking-tighter">
            <span className={theme === 'dark' ? 'text-white' : 'text-black'}>Imnot'S</span>
            <span className="text-[#FFB800]"> Studios</span>
          </div>
        </div>

        {/* Menu */}
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

        {/* Toggle Theme */}
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
