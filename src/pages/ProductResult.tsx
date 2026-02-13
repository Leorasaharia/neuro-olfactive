import { useLocation, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { PerfumeProfile } from '../utils/perfumeEngine';

export default function ProductResult() {
    const location = useLocation();
    const perfume = location.state?.perfume as PerfumeProfile;

    if (!perfume) {
        return <Navigate to="/discovery" replace />;
    }

    return (
        <div className="min-h-screen bg-luxury-ivory pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
                {/* Visual Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="relative aspect-[4/5] bg-white border border-luxury-gray/20 flex items-center justify-center overflow-hidden"
                >
                    <div className="w-full h-full absolute inset-0 bg-luxury-gold/5" />
                    <div className="z-10 text-center p-10 border border-luxury-charcoal/10 bg-white/80 backdrop-blur-sm shadow-xl max-w-sm">
                        <h2 className="text-4xl font-serif text-luxury-charcoal mb-2">{perfume.name}</h2>
                        <p className="text-xs uppercase tracking-widest text-luxury-gold mb-6">{perfume.accord} Accord</p>
                        <div className="w-16 h-[1px] bg-luxury-charcoal/20 mx-auto mb-6" />
                        <p className="text-luxury-charcoal/60 italic text-sm">{perfume.tagline}</p>
                    </div>
                </motion.div>

                {/* Data Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="flex flex-col justify-center"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <span className="px-3 py-1 bg-luxury-charcoal text-luxury-ivory text-xs uppercase tracking-widest">
                            Neuro-Match: {perfume.neuroScore}%
                        </span>
                        <span className="text-xs text-luxury-charcoal/40 uppercase tracking-widest">
                            ID: {perfume.id}
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-serif text-luxury-charcoal mb-8 leading-none">
                        Uniquely <br /><span className="italic text-luxury-gold">Yours.</span>
                    </h1>

                    <p className="text-luxury-charcoal/70 font-light mb-10 leading-relaxed text-lg">
                        {perfume.description}
                    </p>

                    <div className="space-y-8 mb-12">
                        <div>
                            <h3 className="text-sm font-serif text-luxury-charcoal mb-2">Top Notes</h3>
                            <p className="text-luxury-charcoal/60 font-light">{perfume.notes.top.join(', ')}</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-serif text-luxury-charcoal mb-2">Heart Notes</h3>
                            <p className="text-luxury-charcoal/60 font-light">{perfume.notes.heart.join(', ')}</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-serif text-luxury-charcoal mb-2">Base Notes</h3>
                            <p className="text-luxury-charcoal/60 font-light">{perfume.notes.base.join(', ')}</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button className="flex-1 py-4 bg-luxury-charcoal text-luxury-ivory text-sm uppercase tracking-widest hover:bg-luxury-gold transition-colors">
                            Reserve Formulation
                        </button>
                        <button className="px-6 py-4 border border-luxury-charcoal text-luxury-charcoal hover:bg-luxury-charcoal hover:text-luxury-ivory transition-colors">
                            Save to Profile
                        </button>
                    </div>

                    <div className="mt-8 text-center md:text-left">
                        <Link to="/discovery" className="text-xs text-luxury-charcoal/40 uppercase tracking-widest hover:text-luxury-gold border-b border-transparent hover:border-luxury-gold transition-all">
                            Restart Analysis
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
