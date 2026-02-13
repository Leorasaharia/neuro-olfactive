import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function ProblemStatement() {
    return (
        <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h2 className="text-4xl font-serif text-luxury-charcoal mb-8 leading-tight">
                        The Paradox of <br /> <span className="text-luxury-gold italic">Choice & Authenticity</span>
                    </h2>
                    <p className="text-luxury-charcoal/70 mb-6 font-light leading-relaxed">
                        In an era of endless options and rapid trend cycles, discovering a fragrance that truly resonates with one's neurological and emotional identity has become increasingly complex.
                    </p>
                    <p className="text-luxury-charcoal/70 font-light leading-relaxed">
                        Standard recommendations rely on superficial data. NeuroOlfactive Intelligence goes deeper—bridging the gap between biotechnology and sensory perception to decode the scent that your brain, not just your nose, desires.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="bg-white p-10 border border-luxury-gray/30 shadow-sm"
                >
                    <h3 className="text-lg font-serif mb-6 text-luxury-charcoal">The Challenge</h3>
                    <ul className="space-y-4 text-sm text-luxury-charcoal/60">
                        <li className="flex gap-4 items-start">
                            <span className="text-luxury-gold font-serif text-xl">01</span>
                            <span>Overwhelmed by "Dupes" and mass-market uniformity.</span>
                        </li>
                        <li className="flex gap-4 items-start">
                            <span className="text-luxury-gold font-serif text-xl">02</span>
                            <span>Disconnect between marketed emotion and actual neurological response.</span>
                        </li>
                        <li className="flex gap-4 items-start">
                            <span className="text-luxury-gold font-serif text-xl">03</span>
                            <span>Sustainability often sacrificed for synthetic stability.</span>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
