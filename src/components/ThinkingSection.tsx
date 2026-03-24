import { motion } from "framer-motion";

const items = [
  {
    bold: "Make it talkworthy",
    text: "People don't share ads. They share things that feel worth talking about.",
  },
  {
    bold: "Break the pattern",
    text: "Familiar format gets ignored. Attention comes from the unexpected.",
  },
  {
    bold: "Make people part of it",
    text: "Audience shouldn't just watch. They should participate.",
  },
  {
    bold: "Build with culture",
    text: "Best ideas don't feel like campaign. They feel native to the moment.",
  },
];

const ThinkingSection = () => {
  return (
    <section className="py-28 lg:py-36 relative border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="font-mono text-xs tracking-[0.15em] uppercase text-muted-foreground block mb-4">
            Approach
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground">
            How I think about{" "}
            <span className="text-primary">marketing</span>?
          </h2>
        </motion.div>

        <div className="space-y-0">
          {items.map((item, i) => (
            <motion.div
              key={item.bold}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
              className="grid lg:grid-cols-[1fr_1fr] gap-6 lg:gap-20 py-10 border-b border-border group"
            >
              <h3 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {item.bold}
              </h3>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed self-center">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThinkingSection;
