import React from 'react';
import HeaderAngher from "../components/angher/headerAngher";
import BannerAngher from "../components/angher/bannerangher"
import ContribuicoesAngher from "../components/angher/contribuicoes";
import { TecnologiasAngher } from "../components/angher/tecnologias";

const AngherPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <HeaderAngher />
      <section id="bannerangher">
        <BannerAngher />
      </section>
      <section id="contribuicoes">
      <ContribuicoesAngher />
      </section>
        <section id="tecnologias">
        <TecnologiasAngher />
        </section>
    </main>
  );
};

export default AngherPage;