import HeroSection from "@/components/HeroSection";
import BrokenSection from "@/components/BrokenSection";
import ThinkingSection from "@/components/ThinkingSection";
import CategoriesSection from "@/components/CategoriesSection";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      {/* Fixed nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-5 bg-background/80 backdrop-blur-sm border-b border-border">
        <span className="font-mono text-xs tracking-[0.15em] text-foreground font-medium">
          JAREER SAMAD
        </span>
        <span className="font-mono text-xs tracking-[0.15em] text-muted-foreground">
          CREATIVE STRATEGY
        </span>
      </nav>

      <div className="pt-16">
        <HeroSection />
        <BrokenSection />
        <ThinkingSection />
        <CategoriesSection />
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-16 text-center">
        <p className="font-mono text-xs text-muted-foreground tracking-[0.1em]">
          © 2026 JAREER SAMAD — IDEAS DESIGNED FOR WORD OF MOUTH
        </p>
      </footer>
    </main>
  );
};

export default Index;
