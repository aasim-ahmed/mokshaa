import { useState, useEffect } from 'react';
import { NavLink, Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Instagram, MapPin, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Brand from './Brand';
import WhatsApp from './WhatsApp';

const links: [string, string][] = [
    ['Home', '/'],
    ['Our Story', '/about'],
    ['Treatments', '/treatments'],
    ['Packages', '/packages'],
    ['Gallery', '/gallery'],
    ['Contact', '/contact'],
];

export function Layout() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Close menu and scroll to top on route change
    useEffect(() => {
        setOpen(false);
        window.scrollTo(0, 0);
    }, [location.pathname]);

    // Scroll listener — transparent when stick top, solid white when scrolled down
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [open]);

    const headerClass = `header ${scrolled ? 'scrolled' : 'hero-top'}${open ? ' menu-open' : ''}`;

    return (
        <>
            <header className={headerClass}>
                <div className="nav-wrap">
                    <Brand />

                    {/* Desktop nav */}
                    <nav className={open ? 'nav open' : 'nav'} role="navigation" aria-label="Main navigation">
                        {links.map(([n, p]) => (
                            <NavLink
                                key={p}
                                to={p}
                                end={p === '/'}
                                onClick={() => setOpen(false)}
                            >
                                {n}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="nav-actions">
                        <WhatsApp label="Book a visit" />
                        <button
                            className="menu-toggle"
                            onClick={() => setOpen(o => !o)}
                            aria-label={open ? 'Close menu' : 'Open menu'}
                            aria-expanded={open}
                            aria-controls="mobile-nav"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {open
                                    ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X size={22} /></motion.span>
                                    : <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><Menu size={22} /></motion.span>
                                }
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </header>

            <main>
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>

            <footer className="footer">
                <div className="container footer-top">
                    <div>
                        <Brand />
                        <p className="footer-copy">
                            A considered space to slow down, reconnect and make time for your wellbeing.
                        </p>
                    </div>
                    <div>
                        <h4>EXPLORE</h4>
                        {links.slice(1).map(([n, p]) => (
                            <Link key={p} to={p}>{n}</Link>
                        ))}
                    </div>
                    <div>
                        <h4>FIND US</h4>
                        <p><MapPin size={15} /> Chandra Nagar, Indore, Madhya Pradesh</p>
                        <p><Phone size={15} /> Contact details to be confirmed</p>
                        <a href="https://www.instagram.com/mokshaaspa_01/" target="_blank" rel="noreferrer">
                            <Instagram size={15} /> Instagram <ArrowUpRight size={13} />
                        </a>
                    </div>
                </div>
                <div className="container footer-bottom">
                    <span>© {new Date().getFullYear()} Mokshaa Luxury Wellness Spa. Demo concept.</span>
                    <span>Privacy · Terms · Cancellation policy</span>
                </div>
            </footer>

            <a
                className="whatsapp-float"
                href="https://wa.me/?text=Hello%20Mokshaa%2C%20I%20would%20like%20to%20enquire."
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Mokshaa"
            >
                <MessageCircle size={22} />
            </a>
        </>
    );
}
