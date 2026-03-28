import { motion } from "framer-motion";
import jareerPhoto from "@/assets/jareer-portrait.png";

const HeroSection = () => {
  return (
    <section className="relative grain py-12 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="space-y-8 relative z-10"
          >
            <div className="font-mono text-xs tracking-[0.15em] uppercase text-muted-foreground">
        
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-lg lg:text-2xl text-primary font-medium font-mono tracking-wide">
                  Hey there!
                </p>
                <p className="text-lg lg:text-xl leading-relaxed text-white">
                  I'm <span className="text-primary font-semibold">Jareer Samad</span>.  Across my time in different startups, one question kept bugging me:
                </p>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.1] text-primary"
                style={{ textWrap: "balance" }}
              >
                What does it take to stand out today?
              </motion.p>

              <p className="text-base lg:text-lg leading-relaxed text-white">
                The usual answers like SEO, paid ads, and content have all started to feel repetitive. What once worked is now everywhere. And what’s everywhere gets ignored.
              </p>

              <p className="text-base lg:text-lg leading-relaxed text-white">
                That's what got me interested towards a different approach: ideas designed for word of mouth, built to stand out, and rooted in the one thing AI can't still replicate —{" "}
                <span className="text-primary font-medium border-b border-primary/40">human creativity</span>.
              </p>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow behind */}
              <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full" />
              
              <div className="relative w-[320px] h-[400px] lg:w-[400px] lg:h-[500px] overflow-hidden">
                <img
                  src={jareerPhoto}
                  alt="Jareer Samad"
                  width={800}
                  height={1024}
                  className="w-full h-full object-cover object-top grayscale contrast-125"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>

              {/* Floating accent shapes */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-16 h-16 border border-primary/30"
              />
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-10 h-10 bg-primary/20"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
};

export default HeroSection;
