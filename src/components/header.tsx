import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll'; // Mudamos de react-router-dom para react-scroll

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [passedBanner, setPassedBanner] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = document.getElementById('banner')?.offsetHeight || 0;
      setScrolled(window.scrollY > 50);
      setPassedBanner(window.scrollY > bannerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className={`fixed w-full z-50 bg-white shadow-sm transition-all duration-300 ${scrolled ? 'py-3' : 'py-4'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo/Nome - aparece apenas após passar o banner */}
          {passedBanner && (
            <button 
              onClick={scrollToTop}
              className="text-xl font-bold text-blue-900 cursor-pointer"
            >
              Thiago <span className="text-[#ffc100]">Perdigão</span>
            </button>
          )}

          {/* Navegação + Ícones */}
          <div className="flex items-center space-x-6 ml-auto">
            <nav className="hidden md:flex space-x-6">
              <Link 
                to="banner" 
                spy={true} 
                smooth={true} 
                duration={500}
                className="font-bold text-blue-900 hover:text-[#ffc100] transition-colors cursor-pointer"
              >
                Início
              </Link>
              <Link 
                to="SkillsSection" 
                spy={true} 
                smooth={true} 
                duration={500}
                className="font-bold text-blue-900 hover:text-[#ffc100] transition-colors cursor-pointer"
              >
                Competências
              </Link>
              <Link 
                to="projects" 
                spy={true} 
                smooth={true} 
                duration={500}
                className="font-bold text-blue-900 hover:text-[#ffc100] transition-colors cursor-pointer"
              >
                Projetos
              </Link>
              <Link 
                to="Featured" 
                spy={true} 
                smooth={true} 
                duration={500}
                className="font-bold text-blue-900 hover:text-[#ffc100] transition-colors cursor-pointer"
              >
                DESTAQUE!
              </Link>
            </nav>

            {/* Ícones sociais */}
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/thiago-perdigao/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-900 hover:text-[#ffc100] transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a 
                href="https://github.com/ThiagoPerdigao" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-900 hover:text-[#ffc100] transition-colors"
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

export default Header;