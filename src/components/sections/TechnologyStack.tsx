import { motion } from 'framer-motion';
import { Cpu, Activity, Zap, Dna, Eye } from 'lucide-react';

const TECH_ITEMS = [
    { icon: Cpu, title: 'TensorFlow & XGBoost', desc: 'Predictive modeling for scent-emotion correlation.' },
    { icon: Activity, title: 'EEG Semantic Mapping', desc: 'Real-time translation of neural signals to olfactory notes.' },
    { icon: Zap, title: 'SHAP Explainability', desc: 'Transparent decision-making features for every recommendation.' },
    { icon: Dna, title: 'Osmobloom™ Biotech', desc: 'Sustainable, lab-grown ingredient synthesis.' },
    { icon: Eye, title: 'ModiFace Integration', desc: 'AR visualization of scent aura and mood.' },
];

export default function TechnologyStack() {
    return (
        <section className="py-24 bg-luxury-charcoal text-luxury-ivory">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif mb-4">Powered by Science</h2>
                    <p className="text-luxury-gold/80 uppercase tracking-widest text-xs">The NeuroOlfactive Tech Stack</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {TECH_ITEMS.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="p-6 border border-luxury-ivory/10 hover:border-luxury-gold/50 transition-colors group text-center"
                        >
                            <item.icon className="w-8 h-8 mx-auto mb-6 text-luxury-gold group-hover:scale-110 transition-transform" strokeWidth={1} />
                            <h3 className="font-serif text-lg mb-3">{item.title}</h3>
                            <p className="text-xs text-luxury-ivory/50 font-light leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
