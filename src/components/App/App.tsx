import React from "react";
import { Header } from "../Header/Header";
import { Layout } from "../Layout/Layout";
import "./App.scss";
function App() {
  return (
    <Layout>
      <section className="header-section">
        <Header />
      </section>
    </Layout>
  );
}

export default App;
