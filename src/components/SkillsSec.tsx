import { FaReact, FaJs, FaNode, FaJava, FaBootstrap, FaGithub, FaTrello } from 'react-icons/fa';
import { SiSpringboot, SiTailwindcss, SiJest, SiMysql } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact className="text-3xl text-white" /> },
  { name: 'JavaScript', icon: <FaJs className="text-3xl text-white" /> },
  { name: 'React Native', icon: <FaReact className="text-3xl text-white" /> },
  { name: 'Java', icon: <FaJava className="text-3xl text-white" /> },
  { name: 'Spring Boot', icon: <SiSpringboot className="text-3xl text-white" /> },
  { name: 'Node.js', icon: <FaNode className="text-3xl text-white" /> },
  { name: 'Git/GitHub', icon: <FaGithub className="text-3xl text-white" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-3xl text-white" /> },
  { name: 'Bootstrap', icon: <FaBootstrap className="text-3xl text-white" /> },
  { name: 'SQL', icon: <SiMysql className="text-3xl text-white" /> },
  { name: 'Metodologias Ágeis', icon: <FaTrello className="text-3xl text-white" /> },
  { name: 'Testes de Software', icon: <SiJest className="text-3xl text-white" /> },
];

const SkillsSec = () => {
  return (
    <section id="habilidades" className="py-16 bg-blue-900">
      <div className="max-w-screen-xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-white sm:text-5xl relative">
          <div className="relative inline-block mb-4">
            <span className="block">Minhas</span>
            <strong className="block text-amber-400">competências</strong>
          </div>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-zinc-100 border-l-4 border-amber-400 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-blue-900 rounded-full">
                    {skill.icon}
                  </div>
                  <span className="text-lg font-medium text-gray-900">{skill.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSec;