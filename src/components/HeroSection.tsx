import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';


const heroSlides = [
    {
        image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2091&auto=format&fit=crop',
        alt: '수술실 의료진',
        label: '로봇 인공관절 수술실',
    },
    {
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1600&auto=format&fit=crop',
        alt: '의료진 팀',
        label: '의료진 협진 진료',
    },
    {
        image: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=1600&auto=format&fit=crop',
        alt: '병원 진료 상담',
        label: '진단부터 수술 후 관리까지',
    },
    {
        image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1600&auto=format&fit=crop',
        alt: '병원 의료 장비',
        label: '정밀 검사 장비 운영',
    },
];

const HeroSection = () => {
    const [activeSlide, setActiveSlide] = useState(() => Math.floor(Math.random() * heroSlides.length));

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setActiveSlide((current) => {
                let next = current;

                while (next === current) {
                    next = Math.floor(Math.random() * heroSlides.length);
                }

                return next;
            });
        }, 5000);

        return () => window.clearInterval(intervalId);
    }, []);

    return (
        <section className="relative min-h-screen flex items-end overflow-hidden" style={{ background: 'linear-gradient(160deg, #081a2f 55%, #103559)' }}>
            <div className="absolute inset-0 z-0">
                {heroSlides.map((slide, index) => (
                    <img
                        key={slide.image}
                        src={slide.image}
                        alt={slide.alt}
                        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-[1600ms] ${activeSlide === index ? 'opacity-30' : 'opacity-0'}`}
                    />
                ))}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #081a2f 45%, transparent)' }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #081a2f 20%, transparent)' }} />
            </div>

            <div
                className="absolute top-1/4 right-8 md:right-[20%] w-[500px] h-[500px] rounded-full opacity-10"
                style={{ background: 'radial-gradient(circle, #7aa7d6, transparent 70%)' }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-24 pt-48">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                        style={{ border: '1px solid rgba(122,167,214,0.3)', background: 'rgba(122,167,214,0.08)' }}
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-gradient" style={{ background: '#7aa7d6' }} />
                        <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">전남 목포 · Mako 로봇 인공관절</span>
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-6xl xl:text-7xl font-black text-white leading-[1.1] mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        무룹박박사의 실력과{' '}
                        <span className="relative inline-block">
                            <span style={{ color: '#7aa7d6' }}>Mako 로봇</span>
                            <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                                <path d="M0 6 Q100 0 200 6" stroke="#7aa7d6" strokeWidth="2" strokeLinecap="round" fill="none" strokeDasharray="4 2" />
                            </svg>
                        </span>의 조합<br />
                        <span className="text-4xl md:text-5xl xl:text-6xl">더 정확한 인공관절</span>
                    </motion.h1>

                    <div className="mb-10" />

                    <motion.div
                        className="flex flex-wrap gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <a
                            href="#location"
                            className="group flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[#0a0e1a] text-base hover:brightness-110 transition-all active:scale-95"
                            style={{ background: 'linear-gradient(135deg, #7aa7d6 0%, #d7e7f7 50%, #7aa7d6 100%)', boxShadow: '0 20px 48px rgba(16,53,89,0.22)' }}
                        >
                            진료시간 보기
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#mako"
                            className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-base border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all"
                        >
                            마코 수술 보기
                        </a>
                    </motion.div>
                </div>

            </div>

            <div className="absolute right-6 bottom-8 z-10 hidden md:flex items-center gap-3">
                <div
                    className="px-4 py-2 rounded-full text-xs font-bold tracking-[0.14em] uppercase text-[#d7e7f7]"
                    style={{ background: 'rgba(8,26,47,0.72)', border: '1px solid rgba(122,167,214,0.18)' }}
                >
                    {heroSlides[activeSlide].label}
                </div>
                <div
                    className="flex items-center gap-2 rounded-full px-3 py-2"
                    style={{ background: 'rgba(8,26,47,0.6)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                    {heroSlides.map((slide, index) => (
                        <button
                            key={slide.label}
                            type="button"
                            aria-label={`${slide.label} 보기`}
                            onClick={() => setActiveSlide(index)}
                            className={`h-2.5 rounded-full transition-all ${activeSlide === index ? 'w-8 bg-white' : 'w-2.5 bg-white/35 hover:bg-white/60'}`}
                        />
                    ))}
                </div>
            </div>

            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 text-xs tracking-widest z-10"
            >
                <span>아래로 보기</span>
                <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent" />
            </motion.div>
        </section>
    );
};

export default HeroSection;
