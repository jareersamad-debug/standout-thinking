import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

type Drop = { title: string; description: string; bg: string };

const categoryData: Record<string, { title: string; drops: Drop[] }> = {
  "voice-ai": {
    title: "VOICE AI",
    drops: [
      {
        title: "The Uncanny Valley Flip",
        description: "What if the 'imperfection' of AI voices became the feature? Design voice experiences that lean into synthetic texture — making the artificial feel intentionally artistic.",
        bg: "from-[hsl(72,100%,50%,0.05)] to-transparent",
      },
      {
        title: "Voice as Social Currency",
        description: "Let users create shareable voice moments — AI clones that say things their friends would never expect. Built for virality, not utility.",
        bg: "from-[hsl(200,60%,10%)] to-transparent",
      },
      {
        title: "The 3-Second Hook",
        description: "AI voices that open with something so unexpected, people can't scroll past. Designed for the attention economy.",
        bg: "from-[hsl(280,40%,8%)] to-transparent",
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
      },
      {
        title: "Template That Talks",
        description: "Templates with built-in copy that sounds like a real person. No lorem ipsum. No 'Welcome to our website.' Every word earns its place.",
        bg: "from-[hsl(160,40%,8%)] to-transparent",
      },
      {
        title: "The Anti-Portfolio",
        description: "Websites designed to break portfolio conventions. Horizontal scrolls, interactive case studies, embedded demos.",
        bg: "from-[hsl(30,50%,8%)] to-transparent",
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
      },
      {
        title: "Social Proof That Moves",
        description: "User stories that feel like mini-documentaries, not testimonials. Real people, real context, no scripts.",
        bg: "from-[hsl(340,40%,8%)] to-transparent",
      },
      {
        title: "The Accountability Loop",
        description: "Fitness becomes social when failing is visible. Gentle public accountability that makes quitting harder than continuing.",
        bg: "from-[hsl(210,40%,8%)] to-transparent",
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
      },
      {
        title: "The Anti-Algorithm",
        description: "Stop optimizing for compatibility scores. Start designing for unexpected chemistry. The best dates are the ones you'd never have picked.",
        bg: "from-[hsl(30,40%,8%)] to-transparent",
      },
      {
        title: "Shared Experiences > Shared Interests",
        description: "Instead of matching on bios, match on moments. Concerts, markets, hikes — real context beats curated profiles every time.",
        bg: "from-[hsl(270,30%,8%)] to-transparent",
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
      },
      {
        title: "Waste as Spectacle",
        description: "Turn food waste data into public installations that make ignoring the problem feel impossible. Guilt as a growth lever.",
        bg: "from-[hsl(45,50%,8%)] to-transparent",
      },
      {
        title: "The Viral Ingredient",
        description: "Design one element of the food experience to be so visually unexpected, people photograph it before they taste it.",
        bg: "from-[hsl(0,40%,8%)] to-transparent",
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

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (dir: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const width = container.clientWidth;
    container.scrollBy({ left: dir === "right" ? width : -width, behavior: "smooth" });
  };

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">Category not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-5 bg-background/80 backdrop-blur-sm border-b border-border"
      >
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <span className="font-mono text-xs tracking-[0.15em] text-primary">
          {data.title}
        </span>
        <div className="flex items-center gap-1">
          {data.drops.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === activeIndex ? "bg-primary" : "bg-border"
              }`}
            />
          ))}
        </div>
      </motion.header>

      {/* Horizontal scroll */}
      <div
        ref={scrollRef}
        className="flex-1 flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pt-16"
        style={{ scrollbarWidth: "none" }}
      >
        {data.drops.map((drop, i) => (
          <div
            key={i}
            className={`flex-shrink-0 w-screen h-screen snap-start flex items-center justify-center bg-gradient-to-br ${drop.bg}`}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
              className="max-w-2xl px-8 text-center"
            >
              <span className="font-mono text-xs tracking-[0.15em] text-primary/60 block mb-6">
                DROP {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-8" style={{ textWrap: "balance" }}>
                {drop.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {drop.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Nav arrows */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center gap-4 z-50">
        <button
          onClick={() => scrollTo("left")}
          className="w-12 h-12 flex items-center justify-center border border-border bg-background/80 backdrop-blur-sm text-foreground hover:border-primary/50 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scrollTo("right")}
          className="w-12 h-12 flex items-center justify-center border border-border bg-background/80 backdrop-blur-sm text-foreground hover:border-primary/50 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CategoryPage;
