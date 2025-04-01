import { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const Solucao = () => {
  const [activeTab, setActiveTab] = useState<'web' | 'mobile'>('web');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef<HTMLDivElement>(null);

  const telasWeb = [
    {
      img: "/ezsnack/EstoqueWeb.png",
      titulo: "Gestão de Estoque",
      descricao: "A tela de estoque é projetada para facilitar a gestão de itens no cardápio, dividindo os produtos em três categorias principais: Salgados, Doces e Bebidas. Cada categoria é apresentada em um card distinto, permitindo uma visualização organizada e clara dos itens disponíveis.",
      funcionalidades: [
        "Visualização de Itens: Cada card exibe os itens cadastrados, com informações como nome, preço, quantidade em estoque e status de disponibilidade.",
        "CRUD Completo",
        "Disponibilizar/Indisponibilizar: Com apenas um clique, alterne o status de cada item para que ele apareça ou não no cardápio disponível aos clientes."
      ]
    },
    {
      img: "/ezsnack/PedidosWeb.png",
      titulo: "Painel de Pedidos",
      descricao: "A tela de pedidos é projetada para gerenciar os pedidos recebidos, organizando-os em três categorias principais: Pendentes, Aprovados e Geral. Cada categoria é apresentada em um card distinto, proporcionando uma visualização clara e eficiente do status dos pedidos.",
      funcionalidades: [
        "Visualização por Status: Pendentes: Lista todos os pedidos aguardando aprovação. Aprovados: Exibe os pedidos já aprovados e em processamento. Geral: Mostra todos os pedidos em um só lugar, independentemente do status.",
        "Alteração de Status: Atualize o status de um pedido para refletir seu progresso (ex.: de pendente para aprovado).",
        "Recusar ou Cancelar Pedidos: Gerencie exceções recusando ou cancelando pedidos conforme necessário."
      ]
    },
    {
      img: "/ezsnack/PerfilWeb.png",
      titulo: "Perfil Administrativo da Escola",
      descricao: "A tela de perfil foi desenvolvida para gerenciar as informações da escola e configurações relacionadas ao perfil de acesso.",
      funcionalidades: [
        "Visualização das Informações da Escola: Exibe dados como nome, endereço, e outros detalhes relevantes da instituição.",
        "Alteração de Senha: Permite ao usuário atualizar a senha de acesso com segurança.",
        "Logout: Oferece a opção de deslogar do sistema, encerrando a sessão ativa."
      ]
    }
  ];

  const telasMobile = [
    {
      img: "/ezsnack/HomeMobile.jpg",
      titulo: "Home Mobile",
      descricao: "Interface adaptada ao perfil do usuário",
      funcionalidades: [
        "Saldo Atual: Mostra o saldo disponível do aluno ou, no caso de responsáveis, o saldo dos alunos vinculados.",
        "Navegação Adaptada ao Perfil: Alunos têm acesso a pedidos e histórico, enquanto responsáveis podem gerenciar e monitorar dependentes.",
        "Acesso rápido às funções"
      ]
    },
    {
      img: "/ezsnack/PedidosMobile.jpg",
      titulo: "Realização de Pedidos",
      descricao: "A tela de realização de pedidos organiza os itens do cardápio em categorias e permite que o usuário escolha a quantidade desejada, exibindo o total do pedido em tempo real e confirmando a compra de forma prática.",
      funcionalidades: [
        "Categorias de Itens: Os itens do cardápio são organizados em três abas distintas: Salgados, Doces e Bebidas, facilitando a navegação e escolha dos produtos.",
        "Seleção de Quantidades: O usuário pode ajustar dinamicamente a quantidade desejada para cada item.",
        "Cálculo Dinâmico do Total: O total do pedido é exibido no rodapé da tela, sendo atualizado automaticamente conforme os itens são adicionados ou removidos.",
        "Realizar Pedido: Ao ser acionado, exibe um modal de confirmação com um resumo do pedido, incluindo os itens selecionados e o valor total."
      ]
    },
    {
      img: "/ezsnack/HistoricoMobile.jpg",
      titulo: "Histórico de Pedidos",
      descricao: "A tela de histórico permite aos usuários visualizar todos os pedidos realizados, com funcionalidades adicionais para os responsáveis, que podem selecionar o dependente cujos pedidos desejam consultar.",
      funcionalidades: [
        "Visualização de Pedidos: Exibe uma lista com todos os pedidos realizados pelo aluno ou dependente, incluindo detalhes como data, itens e status do pedido.",
        "Seleção de Dependente (para Responsáveis): Ao acessar a tela, o responsável é solicitado a escolher qual dependente deseja visualizar o histórico.",
        "Alteração de Dependente: A qualquer momento, o responsável pode mudar o dependente e consultar o histórico de outro aluno."
      ]
    },
    {
      img: "/ezsnack/PerfilMobile.jpg",
      titulo: "Perfil do Responsável",
      descricao: "A tela de perfil do responsável permite o gerenciamento completo das informações pessoais e dos dependentes vinculados à conta, incluindo funcionalidades para controle de saldo, segurança e ajustes de configuração para cada dependente.",
      funcionalidades: [
        "Informações do Usuário: Exibe os dados do responsável, como nome, e-mail e outras informações relevantes.",
        "Alteração de Senha do Responsável: O responsável pode alterar sua senha de acesso a qualquer momento através de um botão dedicado.",
        "Informações dos Dependentes: Mostra uma lista com todos os dependentes do responsável, incluindo detalhes como saldo e configurações da conta.",
        "Gerenciamento de Dependentes: Para cada dependente, o responsável pode: Alterar a Senha, Adicionar Saldo, Limitar Gasto Diário."
      ]
    }
  ];

  const currentTelas = activeTab === 'web' ? telasWeb : telasMobile;

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
    <section className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Cabeçalho ajustado */}
        <div className="mb-12">
  <h1 className="text-4xl font-bold text-gray-900 inline-flex flex-wrap">
    <span>Solução </span>
    <strong className="text-[#ffc100] ml-2">Desenvolvida</strong>
  </h1>
  <p className="mt-4 text-lg text-gray-600">
    Nesta seção, irei apresentar as principais telas do sistema, que foram desenvolvidas para garantir uma navegação intuitiva e eficiente. Cada tela foi projetada com foco na usabilidade, proporcionando uma experiência fluida tanto para alunos quanto para responsáveis. As funcionalidades de cada tela estão detalhadas, facilitando o entendimento de como o sistema organiza e gerencia informações de forma simples e eficaz.
  </p>
</div>

        {/* Abas */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            className={`py-4 px-6 font-medium ${activeTab === 'web' ? 'text-[#ffc100] border-b-2 border-[#ffc100]' : 'text-gray-500'}`}
            onClick={() => {
              setActiveTab('web');
              setCurrentIndex(0);
            }}
          >
            Versão Web
          </button>
          <button
            className={`py-4 px-6 font-medium ${activeTab === 'mobile' ? 'text-[#ffc100] border-b-2 border-[#ffc100]' : 'text-gray-500'}`}
            onClick={() => {
              setActiveTab('mobile');
              setCurrentIndex(0);
            }}
          >
            Aplicativo Mobile
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
                <p className="text-gray-200">
                  
                </p>
              </div>
              
              {/* Botões de navegação com ícones FA */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#ffc100] text-white p-3 rounded-full hover:bg-[#e6b000] transition-all shadow-md"
              >
                <FaChevronLeft className="text-lg" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#ffc100] text-white p-3 rounded-full hover:bg-[#e6b000] transition-all shadow-md"
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
                  className={`w-3 h-3 ${index === currentIndex ? 'bg-[#ffc100]' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>

          {/* Detalhes da Tela */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {currentTelas[currentIndex].titulo}
            </h3>
            <p className="text-gray-600 mb-6">
              {currentTelas[currentIndex].descricao}
            </p>
            
            <h4 className="font-semibold text-gray-900 mb-3">Principais Funcionalidades:</h4>
            <ul className="space-y-3">
              {currentTelas[currentIndex].funcionalidades.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#ffc100] mr-2">•</span>
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