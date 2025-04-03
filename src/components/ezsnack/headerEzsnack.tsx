import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const HeaderEzsnack = () => {
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
          {/* Logo/Nome - sempre visível e volta para a home */}
          <RouterLink 
            to="/" 
            className="text-xl font-bold text-black hover:text-[#ffc100] transition-colors"
          >
            Thiago <span className="text-[#ffc100] hover:text-black transition-colors">Perdigão</span>
          </RouterLink>

          {/* Navegação para seções da página EZSNACK */}
          <div className="flex items-center space-x-6 ml-auto">
            <nav className="hidden md:flex space-x-6">
              <ScrollLink 
                to="bannerezsnack" 
                spy={true} 
                smooth={true} 
                duration={500}
                className="font-bold text-black hover:text-[#ffc100] transition-colors cursor-pointer"
              >
                Introdução
              </ScrollLink>
              <ScrollLink 
                to="apresentacao" 
                spy={true} 
                smooth={true} 
                duration={500}
                className="font-bold text-black hover:text-[#ffc100] transition-colors cursor-pointer"
              >
                Reconhecimento
              </ScrollLink>
              <ScrollLink 
                to="contribuicoes" 
                spy={true} 
                smooth={true} 
                duration={500}
                className="font-bold text-black hover:text-[#ffc100] transition-colors cursor-pointer"
              >
                Minha Contribuição
              </ScrollLink>
              <ScrollLink 
                to="solucao" 
                spy={true} 
                smooth={true} 
                duration={500}
                className="font-bold text-black hover:text-[#ffc100] transition-colors cursor-pointer"
              >
                Solução
              </ScrollLink>
              <ScrollLink 
                to="tecnologias" 
                spy={true} 
                smooth={true} 
                duration={500}
                className="font-bold text-black hover:text-[#ffc100] transition-colors cursor-pointer"
              >
                Tecnologias
              </ScrollLink>
            </nav>

            {/* Ícones sociais - sempre visíveis */}
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/thiago-perdigao/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black hover:text-[#ffc100] transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a 
                href="https://github.com/ThiagoPerdigao" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black hover:text-[#ffc100] transition-colors"
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

export default HeaderEzsnack;