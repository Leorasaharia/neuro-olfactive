import ProblemStatement from '../components/sections/ProblemStatement';
import TechnologyStack from '../components/sections/TechnologyStack';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <div className="bg-luxury-ivory min-h-screen">
            <div className="pt-32 pb-20 px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-6xl font-serif text-luxury-charcoal mb-6"
                >
                    Responsible <span className="italic text-luxury-gold">Intelligence</span>
                </motion.h1>
                <p className="text-luxury-charcoal/60 max-w-xl mx-auto font-light">
                    Our methodology is grounded in transparency, neuroscience, and ethical AI design.
                </p>
            </div>

            <ProblemStatement />

            <TechnologyStack />

            <section className="py-20 px-6 bg-white border-t border-luxury-gray/20">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-serif mb-12">Ethical AI Framework</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="p-6 border border-luxury-gray/20">
                            <h3 className="font-serif text-lg mb-2">No Biometric Storage</h3>
                            <p className="text-xs text-luxury-charcoal/60 leading-relaxed">
                                Simulated physiological data is processed in real-time and immediately discarded. Your neurological privacy is paramount.
                            </p>
                        </div>
                        <div className="p-6 border border-luxury-gray/20">
                            <h3 className="font-serif text-lg mb-2">Human-in-the-Loop</h3>
                            <p className="text-xs text-luxury-charcoal/60 leading-relaxed">
                                AI proposes, but never prescribes without user agency. The final choice always remains with the human.
                            </p>
                        </div>
                        <div className="p-6 border border-luxury-gray/20">
                            <h3 className="font-serif text-lg mb-2">Transparent Logic</h3>
                            <p className="text-xs text-luxury-charcoal/60 leading-relaxed">
                                Every recommendation includes "explainability metrics" showing exactly why a scent profile was matched.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
