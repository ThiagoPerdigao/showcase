import { useEffect } from 'react';
import HeaderEzsnack from "../components/ezsnack/headerEzsnack";
import Apresentacao from "../components/ezsnack/apresentacao";
import BannerEzSnack from "../components/ezsnack/bannerezsnack";
import Contribuicoes from "../components/ezsnack/contribuicoes";
import { Solucao } from "../components/ezsnack/solucao";
import { Tecnologias } from "../components/ezsnack/tecnologias";
import Footer from '../components/ezsnack/footer';

const Ezsnack = () => {
  useEffect(() => {
    // Rolagem para o topo quando o componente é montado
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <HeaderEzsnack />
      <section id="bannerezsnack">
        <BannerEzSnack />
      </section>
      <section id="apresentacao">
        <Apresentacao />
      </section>
      <section id="contribuicoes">
        <Contribuicoes />
      </section>
      <section id="solucao">
        <Solucao />
      </section>
      <section id="tecnologias">
        <Tecnologias />
      </section>
      <Footer />
    </main>
  );
};

export default Ezsnack;