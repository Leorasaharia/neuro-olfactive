import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { generatePerfume } from '../utils/perfumeEngine';

export default function Discovery() {
    const navigate = useNavigate();
    const [step, setStep] = useState(0);
    const [mood, setMood] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);

    const MOODS = ['Serene', 'Passion', 'Focus', 'Nostalgia', 'Euphoria', 'Mystery'];

    useEffect(() => {
        if (isProcessing) {
            const timer = setTimeout(() => {
                const result = generatePerfume(mood);
                // Save result to state or pass via navigation state
                // We'll simulate passing via ID but since it's client-side generated,
                // we might need a global store or just pass state. 
                // For simplicity, passing state via navigation.
                navigate(`/product/${result.id}`, { state: { perfume: result } });
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isProcessing, mood, navigate]);

    return (
        <div className="min-h-screen bg-luxury-charcoal text-luxury-ivory flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-luxury-charcoal to-black z-0 pointer-events-none" />

            <div className="relative z-10 w-full max-w-2xl text-center">
                <AnimatePresence mode="wait">
                    {step === 0 && (
                        <motion.div
                            key="step0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <h2 className="text-3xl font-serif mb-12">Select your target emotional state.</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {MOODS.map(m => (
                                    <button
                                        key={m}
                                        onClick={() => { setMood(m); setStep(1); }}
                                        className="h-32 border border-luxury-ivory/20 hover:border-luxury-gold hover:bg-luxury-gold/10 transition-all uppercase tracking-widest text-sm"
                                    >
                                        {m}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center"
                        >
                            <h2 className="text-2xl font-serif mb-8">Calibrating Neuro-Olfactive Baseline...</h2>
                            <p className="text-luxury-ivory/50 mb-12 text-sm max-w-md">
                                Please remain still. The system is analyzing micro-expressions and simulated biometric feedback to determine your scent profile.
                            </p>

                            <button
                                onClick={() => { setIsProcessing(true); setStep(2); }}
                                className="px-10 py-4 bg-luxury-gold text-luxury-charcoal font-medium uppercase tracking-widest hover:bg-white transition-colors"
                            >
                                Initiate Analysis
                            </button>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center justify-center h-64"
                        >
                            <div className="w-full h-full flex items-center justify-center">
                                {/* Simulated Waveform Animation */}
                                <motion.div
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.5, 1, 0.5],
                                        rotate: [0, 180, 360]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    className="w-32 h-32 border-2 border-luxury-gold rounded-full"
                                />
                                <motion.div
                                    animate={{
                                        scale: [1.5, 1, 1.5],
                                        opacity: [0.3, 0.8, 0.3],
                                        rotate: [360, 180, 0]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    className="absolute w-48 h-48 border border-luxury-gold/50 rounded-full"
                                />
                            </div>
                            <p className="mt-8 text-luxury-gold animate-pulse tracking-widest uppercase text-xs">Processing Neural Data...</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
