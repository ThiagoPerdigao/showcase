import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6 text-center">CONTATOS</h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-16">
          {/* GitHub */}
          <a 
            href="https://github.com/ThiagoPerdigao" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#ffc100] transition-colors"
          >
            <FaGithub className="text-xl" />
            <span>/ThiagoPerdigao</span>
          </a>
          
          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/thiago-perdigao/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#ffc100] transition-colors"
          >
            <FaLinkedin className="text-xl" />
            <span>/in/thiago-perdigao</span>
          </a>
          
          {/* Email */}
          <a 
            href="mailto:thiagovperdigao@gmail.com" 
            className="flex items-center gap-2 hover:text-[#ffc100] transition-colors"
          >
            <FaEnvelope className="text-xl" />
            <span>thiagovperdigao@gmail.com</span>
          </a>
          
          {/* Telefone */}
          <div className="flex items-center gap-2">
            <FaPhone className="text-xl" />
            <span>31 99229 3154</span>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-black text-center">
          <p>© {new Date().getFullYear()} Thiago Perdigão. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;