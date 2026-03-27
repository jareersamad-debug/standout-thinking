import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import voiceAiImg from "@/assets/Eleven Labs_wb.png";
import websiteBuilderImg from "@/assets/Lovable_wb.png";
import fitnessImg from "@/assets/Healthify_wb.png";
import datingImg from "@/assets/Tinder_wb.png";
import foodImg from "@/assets/Whole Truth_wb.png";

const categories = [
  {
    slug: "voice-ai",
    title: "VOICE AI",
    description: "Turning AI voices into experiences people can't stop sharing",
    image: voiceAiImg,
  },
  {
    slug: "ai-website-builder",
    title: "AI WEBSITE BUILDER",
    description: "Build in public. Distribution built-in",
    image: websiteBuilderImg,
  },
  {
    slug: "fitness",
    title: "FITNESS",
    description: "Habits people actually care about — not just track",
    image: fitnessImg,
  },
  {
    slug: "dating",
    title: "DATING",
    description: "Online matches, brought into the real world",
    image: datingImg,
  },
  {
    slug: "food",
    title: "FOOD",
    description: "Making people see what they'd rather ignore",
    image: foodImg,
  },
];

const CategoriesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-28 lg:py-36 relative border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-xs tracking-[0.15em] uppercase text-muted-foreground block mb-4">
            Work
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground">
            My ideas across{" "}
            <span className="text-primary">categories</span>
          </h2>
        </motion.div>

        {/* CATEGORY TILES */}
        <div className="grid md:grid-cols-3 gap-6">
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
                <h3 className="font-mono text-sm font-semibold tracking-[0.1em] text-primary mb-2">
                  {cat.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cat.description}
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