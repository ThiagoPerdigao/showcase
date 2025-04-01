import { FaServer as ServerIcon, FaMobile, FaGithub, FaFigma } from 'react-icons/fa';
import { FiLayout as LayoutIcon, FiClipboard as ClipboardIcon } from 'react-icons/fi';
import { FaJava, FaReact } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiRabbitmq, SiVite, SiTailwindcss, SiGoogledocs } from 'react-icons/si';

export const Tecnologias = () => {
  return (
    <section className="py-16 bg-[#ffc100]">
      <div className="max-w-screen-xl mx-auto px-6">
        

        {/* Subtítulo alinhado à esquerda */}
        <h2 className="text-3xl font-bold text-black mb-8 text-left">
          Tecnologias <span className='text-white'> Utilizadas</span>
        </h2>

        {/* Cards de Tecnologias */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card Backend */}
          <article className=" border-l-4 border-black bg-white p-6 shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-black text-white rounded-full">
                <ServerIcon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Backend</h3>
            </div>

            <ul className="space-y-4">
              {[
                { icon: <FaJava />, name: "Java", desc: "Linguagem principal do backend" },
                { icon: <SiSpringboot />, name: "Spring Boot", desc: "Framework para APIs REST" },
                { icon: <SiMysql />, name: "MySQL", desc: "Banco de dados relacional" },
                { icon: <SiRabbitmq />, name: "RabbitMQ", desc: "Sistema de mensageria" }
              ].map((tech, index) => (
                <li key={index} className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-lg">
                  <div className="p-2 bg-[#ffc100] rounded-full">
                    <div className="text-white text-xl">{tech.icon}</div>
                  </div>
                  <div>
                    <strong className="font-bold text-lg text-gray-900">{tech.name}</strong>
                    <p className="text-base text-gray-600 mt-1">{tech.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>

          {/* Card Frontend */}
          <article className="border-l-4 border-black bg-white p-6 shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-black text-white rounded-full">
                <LayoutIcon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Frontend</h3>
            </div>

            <ul className="space-y-4">
              {[
                { icon: <FaReact />, name: "React", desc: "Utilizado para o frontend web" },
                { icon: <SiVite />, name: "Vite", desc: "Utilizado para melhor performance" },
                { icon: <SiTailwindcss />, name: "Tailwind", desc: "Utilizado para estilização" },
                { icon: <FaMobile />, name: "React Native", desc: "Utilizado na aplicação móvel" }
              ].map((tech, index) => (
                <li key={index} className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-lg">
                  <div className="p-2 bg-[#ffc100] rounded-full">
                    <div className="text-white text-xl">{tech.icon}</div>
                  </div>
                  <div>
                    <strong className="font-bold text-lg text-gray-900">{tech.name}</strong>
                    <p className="text-base text-gray-600 mt-1">{tech.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>

          {/* Card Planejamento */}
          <article className="border-l-4 border-black bg-white p-6 shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-black text-white rounded-full">
                <ClipboardIcon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Planejamento</h3>
            </div>

            <ul className="space-y-4">
              {[
                { icon: <FaGithub />, name: "GitHub", desc: "Para controle de versão" },
                { icon: <FaGithub />, name: "GitHub Issues", desc: "Quadro Kanban" },
                { icon: <FaFigma />, name: "Figma", desc: "Prototipagem" },
                { icon: <SiGoogledocs />, name: "Pacote Office Google", desc: "Documentação" }
              ].map((tech, index) => (
                <li key={index} className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-lg">
                  <div className="p-2 bg-[#ffc100] rounded-full">
                    <div className="text-white text-xl">{tech.icon}</div>
                  </div>
                  <div>
                    <strong className="font-bold text-lg text-gray-900">{tech.name}</strong>
                    <p className="text-base text-gray-600 mt-1">{tech.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};