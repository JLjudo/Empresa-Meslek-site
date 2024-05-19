// Estilo
import style from './index.module.css';

// Componentes
import { NavBar } from "./components/pageInicial/navBar";
import { Carrossel } from './components/pageInicial/carrossel';
import { OutrasInforms } from './components/pageInicial/outrasInforms';
import { RetangImg } from './components/pageInicial/retangImg';
import { Criadores } from './components/pageInicial/criadores';
import { Footer } from './components/pageInicial/footer';

export function App() {

  return (
    <>
      {/* Cabeçalho do página */}
      <header className={style.interface}>
        <NavBar />
      </header>
      {/* Conteúdo principal */}
      <main className={style.interface}>
        {/* Carrossel de imagens */}
        <section>
          <Carrossel />
        </section>
        {/* Outras informações */}
        <section>
          <OutrasInforms />
        </section>
        {/* Retângulo de imagem */}
        <section>
          <RetangImg />
        </section>
        {/* Criadores */}
        <section>
          <Criadores />
        </section>
      </main>
      {/* Rodapé da página */}
      <footer className={style.interface}>
          <Footer />
      </footer>
    </>
  )
}
