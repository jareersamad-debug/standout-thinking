import { motion } from "framer-motion";

const cards = [
  {
    label: "TOO MUCH",
    lines: [
      { text: "There's more marketing than ever before.", bold: true },
      { text: "More ads. More content. More noise." },
      "",
      { text: "Costs are rising. Returns are falling.", bold: true },
      { text: "CAC goes up. ROI goes down." },
      "",
      { text: "Brands compete with everything.", bold: true },
      { text: "Not just other brands. But with creators, memes, entertainment." },
    ],
  },
  {
    label: "TOO SIMILAR",
    lines: [
      { text: "AI made content easy to create.", bold: true },
      { text: "But it also made dullness scalable." },
      "",
      { text: "Same hooks. Same formats. Same playbooks.", bold: true },
      { text: "What worked once is now everywhere." },
      "",
      { text: "Safe, competent marketing is everywhere.", bold: true },
      { text: "And that's exactly why it gets ignored." },
    ],
  },
  {
    label: "TOO SAFE",
    lines: [
      { text: "Most marketing isn't designed to stand out.", bold: true },
      { text: "It's designed not to fail." },
      "",
      { text: "No edge. No tension. No personality.", bold: true },
      { text: "Just polished, brand-safe content." },
      "",
      { text: "But people don't share what's safe.", bold: true },
      { text: "They share what makes them feel something." },
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
    <section className="py-16 lg:py-24 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-xs tracking-[0.15em] uppercase text-muted-foreground block mb-4">
            The Problem
          </span>
          <h2 className="text-5xl lg:text-7xl font-bold text-foreground" style={{ textWrap: "balance" }}>
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
              <div className="font-mono text-lg font-bold tracking-[0.1em] text-primary mb-4">
                {card.label}
              </div>
              <div className="w-full h-px bg-border mb-4 "></div>

              <div className="space-y-1">
                {card.lines.map((line, j) => {
                  if (line === "") {
                    return <div key={j} className="h-4" />;
                  }

                  const text = typeof line === "object" ? line.text : line;
                  const isBold = typeof line === "object" && line.bold;

                  return (
                    <p
                      key={j}
                      className={`text-sm leading-relaxed text-foreground transition-colors ${
                        isBold ? "font-bold" : ""
                      }`}
                    >
                      {text}
                    </p>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrokenSection;
