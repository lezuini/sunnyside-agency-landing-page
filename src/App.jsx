import "./App.scss";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Copy from "./components/Copy";
import Features from "./components/Features";
import Proof from "./components/Proof";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="app">
      <Header />
      <Hero />
      <Copy />
      <Features />
      <Proof />
      <Footer />
    </main>
  );
}

export default App;
