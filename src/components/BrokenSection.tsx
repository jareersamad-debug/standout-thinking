import { motion } from "framer-motion";

const cards = [
  {
    label: "TOO MUCH",
    lines: [
      "There's more marketing than ever before.",
      "More ads. More content. More noise.",
      "",
      "Costs are rising. Returns are falling.",
      "CAC goes up. ROI goes down.",
      "",
      "Brands compete with everything.",
      "Not just other brands. But with creators, memes, entertainment.",
    ],
  },
  {
    label: "TOO SIMILAR",
    lines: [
      "AI made content easy to create.",
      "But it also made dullness scalable.",
      "",
      "Same hooks. Same formats. Same playbooks.",
      "What worked once is now everywhere.",
      "",
      "Safe, competent marketing is everywhere.",
      "And that's exactly why it gets ignored.",
    ],
  },
  {
    label: "TOO SAFE",
    lines: [
      "Most marketing isn't designed to stand out.",
      "It's designed not to fail.",
      "",
      "No edge. No tension. No personality.",
      "Just polished, brand-safe content.",
      "",
      "But people don't share what's safe.",
      "They share what makes them feel something.",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.19, 1, 0.22, 1] as [number, number, number, number],
    },
  }),
};

const BrokenSection = () => {
  return (
    <section className="py-28 lg:py-36 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-xs tracking-[0.15em] uppercase text-muted-foreground block mb-4">
            The Problem
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground" style={{ textWrap: "balance" }}>
            What's broken in{" "}
            <span className="text-primary">marketing</span>?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -6, boxShadow: "0 0 40px -10px hsl(72 100% 50% / 0.15)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-card border border-border p-8 group cursor-default transition-colors hover:border-primary/30"
            >
              <div className="font-mono text-sm font-semibold tracking-[0.1em] text-primary mb-6">
                {card.label}
              </div>
              <div className="space-y-1">
                {card.lines.map((line, j) =>
                  line === "" ? (
                    <div key={j} className="h-4" />
                  ) : (
                    <p
                      key={j}
                      className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors"
                    >
                      {line}
                    </p>
                  )
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrokenSection;
