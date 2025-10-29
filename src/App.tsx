import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Team from './components/Team';
import Projects from './components/Projects';
import Manifesto from './components/Manifesto';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className={theme === 'dark' ? 'bg-black' : 'bg-white'}>
      <div className="noise-bg" />
      <CustomCursor />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <Team theme={theme} />
      <Projects theme={theme} />
      <Manifesto theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
