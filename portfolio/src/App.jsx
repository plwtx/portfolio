import "./App.css";
import { useState, useEffect } from "react";
import Gallery from "./components/gallery.jsx";
import End from "./components/end.jsx";
import Main from "./components/main.jsx";

// To do list

function App() {
  useEffect(() => {
    document.title = `こんにちは世界 | 0x706C777478`;
  }, []);
  return (
    <section className="snap-y snap-mandatory scroll-smooth h-screen overflow-scroll overflow-x-hidden">
      <Main />
      <Gallery />
      <End />
    </section>
  );
}

export default App;
