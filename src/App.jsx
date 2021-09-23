import "./App.scss";

import Copy from "./components/Copy";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Proof from "./components/Proof";

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
