import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, PhoneCall, X } from 'lucide-react';

const TEXT = {
  hospitalIntro: '\uBCD1\uC6D0 \uC18C\uAC1C',
  medicalTeam: '\uC758\uB8CC\uC9C4',
  departments: '\uC9C4\uB8CC \uBD84\uC57C',
  equipment: '\uCCA8\uB2E8 \uC7A5\uBE44',
  location: '\uC9C4\uB8CC\uC548\uB0B4',
  guide: '\uC774\uC6A9\uC548\uB0B4',
  logoAlt: '\uBC15\uCCA0\uD64D\uC815\uD615\uC678\uACFC \uB85C\uACE0',
  staffOnly: '\uC9C1\uC6D0\uC804\uC6A9',
  openMenu: '\uBA54\uB274 \uC5F4\uAE30',
  closeMenu: '\uBA54\uB274 \uB2EB\uAE30',
  mobileCaption:
    '\uC804\uB0A8 \uBAA9\uD3EC \u00B7 Mako \uB85C\uBD07 \uC778\uACF5\uAD00\uC808',
};

type NavLink = {
  name: string;
  href?: string;
  action?: 'openGuide';
};

const navLinks: NavLink[] = [
  { name: TEXT.hospitalIntro, href: '#about' },
  { name: TEXT.medicalTeam, href: '#team' },
  { name: TEXT.departments, href: '#departments' },
  { name: TEXT.equipment, href: '#equipment' },
  { name: TEXT.location, href: '#location' },
  { name: TEXT.guide, action: 'openGuide' },
];

const Header = ({ onOpenGuide }: { onOpenGuide: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleGuideOpen = () => {
    setMobileOpen(false);
    onOpenGuide();
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          scrolled ? 'glass-dark py-3 shadow-lg shadow-black/40' : 'bg-transparent py-6'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <a href="#" className="group flex items-center gap-3">
            <img
              src="/pch-logo.png"
              alt={TEXT.logoAlt}
              className="h-11 w-auto object-contain md:h-12"
            />
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) =>
              link.action === 'openGuide' ? (
                <button
                  key={link.name}
                  type="button"
                  onClick={handleGuideOpen}
                  className="group relative text-sm font-medium text-gray-300 transition-colors hover:text-white"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-gradient transition-all duration-300 group-hover:w-full" />
                </button>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="group relative text-sm font-medium text-gray-300 transition-colors hover:text-white"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-gradient transition-all duration-300 group-hover:w-full" />
                </a>
              )
            )}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href="https://erp.pchos.kr"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-bold text-[#0a0e1a] transition-all hover:brightness-110"
              style={{ boxShadow: '0 16px 40px rgba(16,53,89,0.22)' }}
            >
              {TEXT.staffOnly}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            className="relative z-50 p-2 text-white md:hidden"
            aria-label={mobileOpen ? TEXT.closeMenu : TEXT.openMenu}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 flex flex-col justify-between"
            style={{ background: 'linear-gradient(160deg, #081a2f 60%, #184a78)' }}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 pt-6 pb-8">
              <div>
                <img
                  src="/pch-logo.png"
                  alt={TEXT.logoAlt}
                  className="h-11 w-auto object-contain"
                />
                <p className="mt-0.5 text-xs tracking-wider text-gold">{TEXT.mobileCaption}</p>
              </div>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="p-2 text-white"
                aria-label={TEXT.closeMenu}
              >
                <X size={26} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-1 px-8">
              {navLinks.map((link, index) =>
                link.action === 'openGuide' ? (
                  <motion.button
                    key={link.name}
                    type="button"
                    onClick={handleGuideOpen}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.06 }}
                    className="border-b border-white/10 py-5 text-left text-2xl font-bold text-white transition-colors hover:text-gold"
                  >
                    {link.name}
                  </motion.button>
                ) : (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.06 }}
                    className="border-b border-white/10 py-5 text-2xl font-bold text-white transition-colors hover:text-gold"
                  >
                    {link.name}
                  </motion.a>
                )
              )}
            </nav>

            <div className="space-y-3 px-8 pb-12">
              <a
                href="tel:061-277-1100"
                className="flex w-full items-center justify-center gap-3 rounded-2xl py-4 text-lg font-bold text-gold"
                style={{ border: '1px solid rgba(122,167,214,0.4)' }}
              >
                <PhoneCall size={20} />
                061-277-1100
              </a>
              <a
                href="https://erp.pchos.kr"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex w-full items-center justify-center rounded-2xl bg-gold-gradient py-4 text-lg font-bold text-[#0a0e1a]"
              >
                {TEXT.staffOnly}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
