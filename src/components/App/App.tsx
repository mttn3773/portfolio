import React from "react";
import { About } from "../About/About";
import { Header } from "../Header/Header";
import { Element } from "react-scroll";
import { Layout } from "../Layout/Layout";
import { Technologies } from "../Technologies/Technologies";
import "./App.scss";
import { SECTIONS } from "../../content.config";
function App() {
  return (
    <Layout>
      <section className="header-section">
        <Header />
      </section>
      <hr className="section-seaprator" />
      <Element name={SECTIONS.about}>
        <section className="about">
          <About />
        </section>
      </Element>
      <hr className="section-seaprator" />
      <Element name={SECTIONS.technologies}>
        <section className="technologies">
          <Technologies />
        </section>
      </Element>
    </Layout>
  );
}

export default App;
