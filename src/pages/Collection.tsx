import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Mock Data for Collection
const COLLECTION = [
    { id: 'base-01', name: 'Neural Santal', notes: 'Sandalwood, Iso E Super, Bergamot', category: 'Woody' },
    { id: 'base-02', name: 'Cortex Flora', notes: 'Jasmine Sambac, White Musk, Aldehydes', category: 'Floral' },
    { id: 'base-03', name: 'Synapse Spice', notes: 'Saffron, Black Pepper, Ambergris', category: 'Oriental' },
    { id: 'base-04', name: 'Limbic Aqua', notes: 'Sea Salt, Driftwood, Sage', category: 'Fresh' },
];

export default function Collection() {
    return (
        <div className="bg-luxury-ivory min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-5xl font-serif text-luxury-charcoal mb-4">The Base Collection</h1>
                    <p className="text-luxury-charcoal/60 font-light">Refillable, sustainable, and designed to perform.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {COLLECTION.map((perfume, index) => (
                        <motion.div
                            key={perfume.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative"
                        >
                            <div className="aspect-[4/5] bg-white border border-luxury-gray/20 flex items-center justify-center p-8 mb-6 overflow-hidden relative">
                                {/* Placeholder Bottle Visualization */}
                                <div className="w-full h-full border border-luxury-gold/30 bg-luxury-ivory/50"></div>

                                <div className="absolute inset-0 bg-luxury-charcoal/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <Link to={`/product/${perfume.id}`} className="px-6 py-3 bg-white text-luxury-charcoal text-xs uppercase tracking-widest hover:bg-luxury-gold hover:text-white transition-colors border border-luxury-charcoal/10">
                                        View Profile
                                    </Link>
                                </div>
                            </div>
                            <h3 className="font-serif text-xl text-luxury-charcoal mb-1 group-hover:text-luxury-gold transition-colors">{perfume.name}</h3>
                            <p className="text-xs text-luxury-charcoal/50 uppercase tracking-wide mb-2">{perfume.category}</p>
                            <p className="text-sm text-luxury-charcoal/70 font-light italic">{perfume.notes}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
