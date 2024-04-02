import { Header } from './assets/components/Header';
import Section from './assets/components/Section';
import { Footer } from "./assets/components/Footer";
import { Nav } from "./assets/components/Nav";

function App() {

  return (
    <>
      <Header />
      <Nav title='Soy el Nav desde un prop'>
        <h2>Soy el children</h2>
      </Nav>
      <Section />
      <Footer />
    </>
  );
}

export default App
