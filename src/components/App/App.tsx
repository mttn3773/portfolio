import React, { useState } from "react";
import { About } from "../About/About";
import { Header } from "../Header/Header";
import { Element } from "react-scroll";
import { Layout } from "../Layout/Layout";
import { Technologies } from "../Technologies/Technologies";
import "./App.scss";
import { config } from "../../content";
import { Projects } from "../Projects/Projects";
import { ProjectModal } from "../ProjectModal/ProjectModal";
import { IProject } from "../../content/projects";
function App() {
  const [project, setProject] = useState<IProject | null>(null);
  const { sections, projects } = config;
  const closeModal = () => setProject(null);
  return (
    <Layout>
      <ProjectModal close={closeModal} project={project} />
      <section className="header-section">
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
          <Projects setProject={setProject} />
        </section>
      </Element>
    </Layout>
  );
}

export default App;
