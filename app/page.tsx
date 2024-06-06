import { HeroSection, AboutSection, ProjectsSection } from "./sections";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <div id="home" />
      <HeroSection />
      <div id="about" />
      <AboutSection />
      <div id="projects" />
      <ProjectsSection />
    </main>
  );
}
