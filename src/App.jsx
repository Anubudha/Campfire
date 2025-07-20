import React from "react";
import Navbar from "./components/navbars/navbar";
import ProjectHero from "./components/projectheros/project-hero";
import Dashboard from "./components/dashboards/dashboard";
import Section from "./components/section/section";
import Footers from "./components/footer/footers";

function App() {
  return (
    <div>
      <Navbar />
      <ProjectHero />
      <Dashboard />
      <Section />
      <Footers />
    </div>
  );
}

export default App;
