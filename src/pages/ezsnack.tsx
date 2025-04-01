import Apresentacao from "../components/ezsnack/apresentacao";
import BannerEzSnack from "../components/ezsnack/bannerezsnack";
import Contribuicoes from "../components/ezsnack/contribuicoes";
import { Solucao } from "../components/ezsnack/solucao";
import { Tecnologias } from "../components/ezsnack/tecnologias";

const Ezsnack = () => {
  return (
    <main className="min-h-screen bg-white">
      <BannerEzSnack />
      <Apresentacao />
      <Contribuicoes />
      <Solucao />
      <Tecnologias />
      
    </main>
  );
};

export default Ezsnack;
