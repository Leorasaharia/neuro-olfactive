import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="relative h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background element - mock immersive video/canvas */}
            <div className="absolute inset-0 bg-gradient-to-b from-luxury-ivory via-transparent to-luxury-ivory z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-luxury-gold/10 via-transparent to-transparent opacity-50 blur-3xl" />

            <div className="relative z-20 text-center max-w-4xl px-6">
                <h1 className="text-5xl md:text-7xl font-serif text-luxury-charcoal mb-6 leading-tight">
                    The Science Behind <br />
                    <span className="italic text-luxury-gold">Emotion-Driven</span> Luxury Fragrance
                </h1>
                <p className="text-lg md:text-xl text-luxury-charcoal/70 mb-10 max-w-2xl mx-auto font-light">
                    An AI-powered neuro-olfactive intelligence system transforming fragrance discovery through science, creativity, and sustainability.
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <Link
                        to="/discovery"
                        className="px-8 py-4 bg-luxury-charcoal text-luxury-ivory rounded-none hover:bg-luxury-gold transition-colors duration-500 tracking-widest uppercase text-sm font-medium"
                    >
                        Explore the Intelligence
                    </Link>
                    <Link
                        to="/about"
                        className="px-8 py-4 border border-luxury-charcoal text-luxury-charcoal rounded-none hover:border-luxury-gold hover:text-luxury-gold transition-colors duration-500 tracking-widest uppercase text-sm font-medium"
                    >
                        View the Technology
                    </Link>
                </div>
            </div>
        </div>
    );
}
