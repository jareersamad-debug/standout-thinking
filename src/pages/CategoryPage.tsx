import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

type Drop = { title: string; description: string; bg: string; image: string };

const categoryData: Record<string, { title: string; drops: Drop[] }> = {
  "voice-ai": {
    title: "VOICE AI",
    drops: [
      {
        title: "The Uncanny Valley Flip",
        description: "What if the 'imperfection' of AI voices became the feature? Design voice experiences that lean into synthetic texture — making the artificial feel intentionally artistic.",
        bg: "from-[hsl(72,100%,50%,0.05)] to-transparent",
        image: "/Drops/voice/voice-1.png",
      },
      {
        title: "Voice as Social Currency",
        description: "Let users create shareable voice moments — AI clones that say things their friends would never expect. Built for virality, not utility.",
        bg: "from-[hsl(200,60%,10%)] to-transparent",
        image: "/Drops/voice/voice-2.png",
      },
      {
        title: "The 3-Second Hook",
        description: "AI voices that open with something so unexpected, people can't scroll past. Designed for the attention economy.",
        bg: "from-[hsl(280,40%,8%)] to-transparent",
        image: "/Drops/voice/voice-3.png",
      },
    ],
  },
  "ai-website-builder": {
    title: "AI WEBSITE BUILDER",
    drops: [
      {
        title: "Build in Public, By Default",
        description: "Every site built becomes content. Progress logs, before/after, real metrics — the build process IS the marketing.",
        bg: "from-[hsl(72,100%,50%,0.05)] to-transparent",
        image: "/Drops/builder/builder-1.png",
      },
      {
        title: "Template That Talks",
        description: "Templates with built-in copy that sounds like a real person. No lorem ipsum. No 'Welcome to our website.' Every word earns its place.",
        bg: "from-[hsl(160,40%,8%)] to-transparent",
        image: "/Drops/builder/builder-2.png",
      },
      {
        title: "The Anti-Portfolio",
        description: "Websites designed to break portfolio conventions. Horizontal scrolls, interactive case studies, embedded demos.",
        bg: "from-[hsl(30,50%,8%)] to-transparent",
        image: "/Drops/builder/builder-3.png",
      },
    ],
  },
  fitness: {
    title: "FITNESS",
    drops: [
      {
        title: "Habits > Metrics",
        description: "Stop tracking reps. Start tracking rituals. A fitness product built around what people actually sustain, not what they start.",
        bg: "from-[hsl(72,100%,50%,0.05)] to-transparent",
        image: "/Drops/fitness/fitness-1.png",
      },
      {
        title: "Social Proof That Moves",
        description: "User stories that feel like mini-documentaries, not testimonials. Real people, real context, no scripts.",
        bg: "from-[hsl(340,40%,8%)] to-transparent",
        image: "/Drops/fitness/fitness-2.png",
      },
      {
        title: "The Accountability Loop",
        description: "Fitness becomes social when failing is visible. Gentle public accountability that makes quitting harder than continuing.",
        bg: "from-[hsl(210,40%,8%)] to-transparent",
        image: "/Drops/fitness/fitness-3.png",
      },
    ],
  },
  dating: {
    title: "DATING",
    drops: [
      {
        title: "From Swipe to Street",
        description: "Dating apps optimized for matches, not meetings. What if the product's job was to get you offline as fast as possible?",
        bg: "from-[hsl(350,50%,10%)] to-transparent",
        image: "/Drops/dating/dating-1.png",
      },
      {
        title: "The Anti-Algorithm",
        description: "Stop optimizing for compatibility scores. Start designing for unexpected chemistry. The best dates are the ones you'd never have picked.",
        bg: "from-[hsl(30,40%,8%)] to-transparent",
        image: "/Drops/dating/dating-2.png",
      },
      {
        title: "Shared Experiences > Shared Interests",
        description: "Instead of matching on bios, match on moments. Concerts, markets, hikes — real context beats curated profiles every time.",
        bg: "from-[hsl(270,30%,8%)] to-transparent",
        image: "/Drops/dating/dating-3.png",
      },
    ],
  },
  food: {
    title: "FOOD",
    drops: [
      {
        title: "The Uncomfortable Plate",
        description: "What if food marketing showed what people actually eat — not what they aspire to? Radical honesty as a brand strategy.",
        bg: "from-[hsl(120,30%,8%)] to-transparent",
        image: "/Drops/food/food-1.png",
      },
      {
        title: "Waste as Spectacle",
        description: "Turn food waste data into public installations that make ignoring the problem feel impossible. Guilt as a growth lever.",
        bg: "from-[hsl(45,50%,8%)] to-transparent",
        image: "/Drops/food/food-2.png",
      },
      {
        title: "The Viral Ingredient",
        description: "Design one element of the food experience to be so visually unexpected, people photograph it before they taste it.",
        bg: "from-[hsl(0,40%,8%)] to-transparent",
        image: "/Drops/food/food-1.png",
      },
    ],
  },
};

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const data = slug ? categoryData[slug] : null;

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const width = container.clientWidth;
      const idx = Math.round(scrollLeft / width);
      setActiveIndex(idx);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") scrollTo("left");
      if (e.key === "ArrowRight") scrollTo("right");
    };

    container.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const scrollTo = (dir: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const width = container.clientWidth;
    const target = dir === "right" 
      ? container.scrollLeft + width 
      : container.scrollLeft - width;

    container.scrollTo({ left: target, behavior: "auto" });
  };

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">Category not found.</p>
      </div>
    );
  }

  return (
    <div className="h-screen bg-white flex flex-col overflow-hidden">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="z-50 flex items-center justify-between px-4 lg:px-12 py-3 lg:py-4 bg-background border-b border-border"
      >
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-xs lg:text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 lg:w-4 h-4" />
          Back
        </button>
        <span className="font-mono text-[10px] lg:text-xs tracking-[0.15em] text-primary truncate max-w-[120px] lg:max-w-none">
          {data.title}
        </span>
        <div className="flex items-center gap-1">
          {data.drops.map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full transition-colors ${i === activeIndex ? "bg-primary" : "bg-border"
                }`}
            />
          ))}
        </div>
      </motion.header>

      {/* Horizontal scroll */}
      <div
        ref={scrollRef}
        className="flex-1 flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none" }}
      >
        {data.drops.map((drop, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-screen h-full snap-start relative flex items-center justify-center p-0 lg:p-20 bg-white"
          >
            <div className="w-full h-full relative flex items-center justify-center">
              <img
                src={drop.image}
                alt={drop.title}
                className="w-full h-full max-w-6xl max-h-[85vh] object-contain drop-shadow-[0_50px_80px_rgba(0,0,0,0.15)]"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Nav arrows */}
      <div className="fixed bottom-4 lg:bottom-4 left-0 right-0 flex justify-center gap-3 lg:gap-4 z-50">
        <button
          onClick={() => scrollTo("left")}
          className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center border border-border bg-black backdrop-blur-sm text-foreground hover:border-primary/50 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 lg:w-5 h-5" />
        </button>
        <button
          onClick={() => scrollTo("right")}
          className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center border border-border bg-black backdrop-blur-sm text-foreground hover:border-primary/50 transition-colors"
        >
          <ChevronRight className="w-4 h-4 lg:w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CategoryPage;
