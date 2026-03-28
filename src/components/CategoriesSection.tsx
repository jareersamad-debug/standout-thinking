import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    slug: "voice-ai",
    title: "VOICE AI",
    description: "Turning AI voices into experiences people can't stop sharing",
    image: "/Drops/work/voiceAI-tile-image.jpg",
  },
  {
    slug: "ai-website-builder",
    title: "AI WEBSITE BUILDER",
    description: "Build in public. Distribution built-in",
    image: "/Drops/work/websiteBuilder-tile-image.jpg",
  },
  {
    slug: "fitness",
    title: "FITNESS",
    description: "Making fitness a part of everyday life",
    image: "/Drops/work/Fitness-tile-image.png",
  },
  {
    slug: "dating",
    title: "DATING",
    description: "Online matches, brought into the real world",
    image: "/Drops/work/dating-tile-image.jpg",
  },
  {
    slug: "food",
    title: "FOOD",
    description: "Making people see what they'd rather ignore",
    image: "/Drops/work/Food-tile-image.jpg",
  },
];

const CategoriesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 lg:py-24 relative border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-xs tracking-[0.15em] uppercase text-muted-foreground block mb-4">
            Work
          </span>
          <h2 className="text-4xl lg:text-7xl font-bold text-foreground">
            My ideas across{" "}
            <span className="text-primary">categories</span>
          </h2>
        </motion.div>

        {/* CATEGORY TILES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: i * 0.12,
                duration: 0.7,
                ease: [0.19, 1, 0.22, 1],
              }}
              onClick={() => navigate(`/category/${cat.slug}`)}
              className="group cursor-pointer bg-card border border-border overflow-hidden hover:border-primary/30 transition-all hover:scale-[1.02]"
            >
              {/* IMAGE */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* TEXT */}
              <div className="p-6">
                <h3 className="font-mono text-base font-bold tracking-[0.1em] text-primary mb-2">
                  {cat.title}
                </h3>
                <p className="text-sm text-white leading-relaxed">
                  <span className="font-normal text-white">{cat.description.split(". ")[0]}.</span> {cat.description.split(". ").slice(1).join(". ")}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CategoriesSection;