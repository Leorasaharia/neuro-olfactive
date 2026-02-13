import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
    return (
        <div className="min-h-screen bg-luxury-ivory text-luxury-charcoal font-sans selection:bg-luxury-gold selection:text-white flex flex-col">
            <nav className="p-6 flex justify-between items-center border-b border-luxury-gray/20">
                <Link to="/" className="text-2xl font-serif font-bold text-luxury-charcoal">
                    NeuroOlfactive
                </Link>
                <div className="flex gap-8 text-sm uppercase tracking-widest font-medium text-luxury-charcoal/80">
                    <Link to="/" className="hover:text-luxury-gold transition-colors">Home</Link>
                    <Link to="/about" className="hover:text-luxury-gold transition-colors">About</Link>
                    <Link to="/collection" className="hover:text-luxury-gold transition-colors">Collection</Link>
                    <Link to="/discovery" className="hover:text-luxury-gold transition-colors">Discovery</Link>
                </div>
            </nav>

            <main className="flex-grow">
                <Outlet />
            </main>

            <footer className="p-10 border-t border-luxury-gray/20 text-center text-xs text-luxury-charcoal/50 uppercase tracking-widest">
                <p>© 2026 NeuroOlfactive Intelligence. Conceptual Prototype.</p>
            </footer>
        </div>
    );
}
