import { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const SolucaoAngher = () => {
  const [activeTab, setActiveTab] = useState<'funcionario' | 'aluno' | 'admin'>('funcionario');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef<HTMLDivElement>(null);

  const telasFuncionario = [
    {
      img: "/angher/Login_Adm.jpeg",
      titulo: "Login Administrativo",
      descricao: "Tela de autenticação para funcionários do almoxarifado e cantina.",
      funcionalidades: [
        "Autenticação segura com validação de credenciais",
        "Redirecionamento para a área apropriada conforme perfil",
        "Recuperação de senha integrada"
      ]
    },
    {
      img: "/angher/SolicitacoesCompra.jpeg",
      titulo: "Solicitações de Compra",
      descricao: "Interface para gerenciamento de solicitações de itens para o almoxarifado.",
      funcionalidades: [
        "Listagem de todas as solicitações pendentes",
        "Aprovação ou reprovação de solicitações",
        "Filtros por status e data"
      ]
    },
    {
      img: "/angher/Estoque_Almoxarifado.jpeg",
      titulo: "Estoque do Almoxarifado",
      descricao: "Controle completo dos itens armazenados no almoxarifado.",
      funcionalidades: [
        "Registro de entradas e saídas de materiais",
        "Alertas de estoque mínimo",
        "Relatórios de movimentação"
      ]
    },
    {
      img: "/angher/Registro_Entradas.jpeg",
      titulo: "Registro de Entradas",
      descricao: "Sistema para registrar novas entradas de itens no almoxarifado.",
      funcionalidades: [
        "Cadastro de novos itens",
        "Atualização de quantidades existentes",
        "Vinculação a solicitações de compra"
      ]
    },
    {
      img: "/angher/Estoque_Cantina.jpeg",
      titulo: "Estoque da Cantina",
      descricao: "Gerenciamento dos produtos disponíveis para venda na cantina.",
      funcionalidades: [
        "Controle de disponibilidade dos produtos",
        "Ajuste de preços e promoções",
        "Integração com o sistema de pedidos"
      ]
    }
  ];

  const telasAluno = [
    {
      img: "/angher/Login_Aluno.jpeg",
      titulo: "Login do Aluno",
      descricao: "Tela de autenticação para alunos acessarem o sistema.",
      funcionalidades: [
        "Login com matrícula e senha",
        "Lembrar credenciais opcional",
        "Redirecionamento para área do aluno"
      ]
    },
    {
      img: "/angher/HomeAluno.jpeg",
      titulo: "Home do Aluno",
      descricao: "Tela principal com resumo e acesso rápido às funcionalidades.",
      funcionalidades: [
        "Visualização do saldo disponível",
        "Acesso rápido ao cardápio",
        "Histórico recente de pedidos"
      ]
    },
    {
      img: "/angher/RealizarPedido.jpeg",
      titulo: "Realizar Pedido",
      descricao: "Interface para alunos solicitarem itens da cantina.",
      funcionalidades: [
        "Cardápio organizado por categorias",
        "Seleção de quantidade e itens",
        "Confirmação e acompanhamento do pedido"
      ]
    },
    {
      img: "/angher/Pedidos_Aluno.jpeg",
      titulo: "Pedidos do Aluno",
      descricao: "Histórico completo de todos os pedidos realizados.",
      funcionalidades: [
        "Filtros por data e status",
        "Detalhes completos de cada pedido",
        "Opção de cancelamento (se permitido)"
      ]
    }
  ];

  const telasAdmin = [
    {
      img: "/angher/HomePage.jpeg",
      titulo: "Home Page",
      descricao: "Tela inicial do sistema com visão geral e acesso rápido.",
      funcionalidades: [
        "Dashboard com métricas importantes",
        "Acesso rápido às principais funcionalidades",
        "Alertas e notificações"
      ]
    },
    {
      img: "/angher/Cadastro_Funcionario.jpeg",
      titulo: "Cadastro de Funcionário",
      descricao: "Interface para administradores cadastrarem novos funcionários.",
      funcionalidades: [
        "Formulário completo de cadastro",
        "Definição de perfis de acesso",
        "Ativação/desativação de contas"
      ]
    },
    {
      img: "/angher/Cadastro_Aluno.jpeg",
      titulo: "Cadastro de Aluno",
      descricao: "Sistema para registro de novos alunos no sistema.",
      funcionalidades: [
        "Cadastro individual ou em lote",
        "Vinculação a turmas e turnos",
        "Geração automática de credenciais"
      ]
    },
    {
      img: "/angher/Ajuda_Almoxarifado.jpeg",
      titulo: "Ajuda do Almoxarifado",
      descricao: "Central de ajuda para funcionários do almoxarifado.",
      funcionalidades: [
        "Tutoriais e manuais de uso",
        "FAQ com dúvidas frequentes",
        "Formulário para solicitar suporte"
      ]
    }
  ];

  const currentTelas = 
    activeTab === 'funcionario' ? telasFuncionario :
    activeTab === 'aluno' ? telasAluno :
    telasAdmin;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === currentTelas.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? currentTelas.length - 1 : prevIndex - 1
    );
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imgRef.current) return;
    
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
  };

  return (
    <section className="py-16 bg-white" id="solucao">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Cabeçalho ajustado */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#486a72] inline-flex flex-wrap">
            <span>Solução </span>
            <strong className="text-[#ff7b25] ml-2">Desenvolvida</strong>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Explore as principais telas do sistema ANGHER, desenvolvidas para atender às necessidades específicas de cada perfil de usuário. Cada interface foi cuidadosamente projetada para oferecer uma experiência intuitiva e eficiente.
          </p>
        </div>

        {/* Abas */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            className={`py-4 px-6 font-medium ${activeTab === 'funcionario' ? 'text-[#ff7b25] border-b-2 border-[#ff7b25]' : 'text-gray-500'}`}
            onClick={() => {
              setActiveTab('funcionario');
              setCurrentIndex(0);
            }}
          >
            Funcionário
          </button>
          <button
            className={`py-4 px-6 font-medium ${activeTab === 'aluno' ? 'text-[#ff7b25] border-b-2 border-[#ff7b25]' : 'text-gray-500'}`}
            onClick={() => {
              setActiveTab('aluno');
              setCurrentIndex(0);
            }}
          >
            Aluno
          </button>
          <button
            className={`py-4 px-6 font-medium ${activeTab === 'admin' ? 'text-[#ff7b25] border-b-2 border-[#ff7b25]' : 'text-gray-500'}`}
            onClick={() => {
              setActiveTab('admin');
              setCurrentIndex(0);
            }}
          >
            Administração
          </button>
        </div>

        {/* Conteúdo das Abas */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Carrossel de Telas Funcional */}
          <div className="md:col-span-1 relative">
            <div 
              ref={imgRef}
              className="relative h-96 overflow-hidden shadow-lg bg-gray-50 group"
              onMouseEnter={() => setZoom(true)}
              onMouseLeave={() => setZoom(false)}
              onMouseMove={handleMouseMove}
            >
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={currentTelas[currentIndex].img}
                  alt={currentTelas[currentIndex].titulo}
                  className={`w-full h-full object-contain p-4 transition-transform duration-300 ${zoom ? 'scale-150' : 'scale-100'}`}
                  style={{
                    transformOrigin: `${position.x}% ${position.y}%`
                  }}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-xl font-bold text-white">
                  {currentTelas[currentIndex].titulo}
                </h3>
              </div>
              
              {/* Botões de navegação */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#ff7b25] text-white p-3 rounded-full hover:bg-[#e66a15] transition-all shadow-md"
              >
                <FaChevronLeft className="text-lg" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#ff7b25] text-white p-3 rounded-full hover:bg-[#e66a15] transition-all shadow-md"
              >
                <FaChevronRight className="text-lg" />
              </button>
            </div>
            
            {/* Indicadores */}
            <div className="flex justify-center mt-4 space-x-2">
              {currentTelas.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3  ${index === currentIndex ? 'bg-[#ff7b25]' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>

          {/* Detalhes da Tela */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-[#486a72] mb-4">
              {currentTelas[currentIndex].titulo}
            </h3>
            <p className="text-gray-600 mb-6">
              {currentTelas[currentIndex].descricao}
            </p>
            
            <h4 className="font-semibold text-[#486a72] mb-3">Principais Funcionalidades:</h4>
            <ul className="space-y-3">
              {currentTelas[currentIndex].funcionalidades.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#ff7b25] mr-2">•</span>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};