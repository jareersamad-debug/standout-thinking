import HeroSection from "@/components/HeroSection";
import BrokenSection from "@/components/BrokenSection";
import ThinkingSection from "@/components/ThinkingSection";
import CategoriesSection from "@/components/CategoriesSection";
import { Linkedin } from "lucide-react";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      {/* Fixed nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-5 bg-background/80 backdrop-blur-sm border-b border-border">
        <span className="font-mono text-xs tracking-[0.15em] text-foreground font-medium">
          JAREER SAMAD
        </span>
        {/* <span className="font-mono text-xs tracking-[0.15em] text-muted-foreground">
          CREATIVE STRATEGY
        </span> */}
      </nav>

      <div className="pt-16">
        <section id="hero"><HeroSection /></section>
        <section id="broken"><BrokenSection /></section>
        <section id="thinking"><ThinkingSection /></section>
        <section id="work"><CategoriesSection /></section>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-5 px-6 lg:px-12 bg-background">
        <a
          href="https://www.linkedin.com/in/jareersamad/"
          target="_blank"
          rel="noopener noreferrer"
          className="items-center gap-4 group transition-all inline-flex"
        >
          <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300">
            <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground group-hover:text-foreground transition-colors uppercase">
              LinkedIn Profile
            </span>
            <span className="font-mono text-[8px] tracking-[0.1em] text-muted-foreground/50 uppercase mt-0.5">
              @jareersamad
            </span>
          </div>
        </a>
      </footer>
    </main>
  );
};

export default Index;
