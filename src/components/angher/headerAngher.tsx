import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const HeaderAngher = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 bg-white shadow-sm transition-all duration-300 ${scrolled ? 'py-3' : 'py-4'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo/Nome - link para home com cores do projeto */}
          <RouterLink 
            to="/" 
            className="text-xl font-bold text-[#486a72] hover:text-[#ff7b25] transition-colors"
          >
            Thiago <span className="text-[#ff7b25] hover:text-[#486a72] transition-colors">Perdigão</span>
          </RouterLink>

          {/* Restante do header permanece igual... */}
          <div className="flex items-center space-x-6 ml-auto">
            <nav className="hidden md:flex space-x-6">
              <ScrollLink 
                to="bannerangher" 
                spy={true} 
                smooth={true} 
                duration={500}
                className="font-bold text-[#486a72] hover:text-[#ff7b25] transition-colors cursor-pointer"
              >
                Introdução
              </ScrollLink>
              <ScrollLink 
                to="contribuicoes" 
                spy={true} 
                smooth={true} 
                duration={500}
                className="font-bold text-[#486a72] hover:text-[#ff7b25] transition-colors cursor-pointer"
              >
                Minha Contribuição
              </ScrollLink>
              <ScrollLink 
                to="solucao" 
                spy={true} 
                smooth={true} 
                duration={500}
                className="font-bold text-[#486a72] hover:text-[#ff7b25] transition-colors cursor-pointer"
              >
                Solução
              </ScrollLink>
              <ScrollLink 
                to="tecnologias" 
                spy={true} 
                smooth={true} 
                duration={500}
                className="font-bold text-[#486a72] hover:text-[#ff7b25] transition-colors cursor-pointer"
              >
                Tecnologias
              </ScrollLink>
            </nav>

            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/thiago-perdigao/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#486a72] hover:text-[#ff7b25] transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a 
                href="https://github.com/ThiagoPerdigao" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#486a72] hover:text-[#ff7b25] transition-colors"
              >
                <FaGithub className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderAngher;