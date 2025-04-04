import React, { useEffect } from 'react';
import HeaderAngher from "../components/angher/headerAngher";
import BannerAngher from "../components/angher/bannerAngher";
import ContribuicoesAngher from "../components/angher/contribuicoes";
import { SolucaoAngher } from "../components/angher/solucaoAngher";
import { TecnologiasAngher } from "../components/angher/tecnologias";

const AngherPage = () => {
  // Garante que a página comece no topo ao carregar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <HeaderAngher />
      <section id="bannerangher">
        <BannerAngher />
      </section>
      <section id="contribuicoes">
        <ContribuicoesAngher />
      </section>
      <section id="solucao">
        <SolucaoAngher />
      </section>
      <section id="tecnologias">
        <TecnologiasAngher />
      </section>
    </main>
  );
};

export default AngherPage;