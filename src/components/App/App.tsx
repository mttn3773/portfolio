import React from "react";

import { Element } from "react-scroll";
import { config } from "../../content";
import { About } from "../About/About";
import { Contacts } from "../Contacts/Contacts";
import { Header } from "../Header/Header";
import { Layout } from "../Layout/Layout";
import { Projects } from "../Projects/Projects";
import { Technologies } from "../Technologies/Technologies";
import "./App.scss";
function App() {
  const { sections } = config;

  return (
    <Layout>
      <section className="header">
        <Header />
      </section>
      <hr className="section-seaprator" />
      <Element name={sections.about}>
        <section className="about">
          <About />
        </section>
      </Element>
      <hr className="section-seaprator" />
      <Element name={sections.technologies}>
        <section className="technologies">
          <Technologies />
        </section>
      </Element>
      <hr className="section-seaprator" />
      <Element name={sections.projects}>
        <section className="projects">
          <Projects />
        </section>
      </Element>
      <hr className="section-seaprator" />
      <Element name={sections.contacts}>
        <section className="contacts">
          <Contacts />
        </section>
      </Element>
    </Layout>
  );
}

export default App;
