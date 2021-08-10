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
      <section className="about">
        <Element name={sections.about}>
          <div className="section-seaprator">
            <hr />
          </div>
          <About />
        </Element>
      </section>
      <section className="technologies">
        <Element name={sections.technologies}>
          <div className="section-seaprator">
            <hr />
          </div>
          <Technologies />
        </Element>
      </section>
      <section className="projects">
        <Element name={sections.projects}>
          <div className="section-seaprator">
            <hr />
          </div>
          <Projects />
        </Element>
      </section>
      <section className="contacts">
        <Element name={sections.contacts}>
          <div className="section-seaprator">
            <hr />
          </div>
          <Contacts />
        </Element>
      </section>
    </Layout>
  );
}

export default App;
