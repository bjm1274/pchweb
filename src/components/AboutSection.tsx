import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const values = [
    { title: 'Mako 로봇수술', desc: '수술 전에 CT로 관절 상태를 보고 계획을 세웁니다.' },
    { title: '박철홍 원장 직접 진료', desc: '진료와 설명을 박철홍 원장이 직접 봅니다.' },
    { title: '목포 지역 진료 경험', desc: '목포시의료원에서 약 14년 근무했습니다.' },
];

const AboutSection = () => {
    return (
        <section id="about" className="py-28 bg-[#f4f8fc] relative overflow-hidden">
            <div
                className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-30"
                style={{ background: 'radial-gradient(circle, #b7d2ea66, transparent 70%)' }}
            />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-4 mb-16"
                >
                    <div className="divider-gold" style={{ width: 60, height: 2, background: 'linear-gradient(90deg, transparent, #4d81b7, transparent)' }} />
                    <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: '#4d81b7' }}>병원 소개</span>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-[#111827] leading-tight mb-6">
                            아픈 곳을 쉽게 설명하고<br />
                            <span style={{ color: '#4d81b7' }}>알맞게 치료합니다</span>
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed mb-10">
                            무릎, 허리, 어깨, 골절 등 정형외과 진료를 봅니다.
                            검사 결과와 치료 방법을 어려운 말보다 쉬운 말로 설명드리고,
                            필요하면 수술 후 회복까지 함께 살핍니다.
                        </p>

                        <ul className="space-y-5">
                            {values.map((v, i) => (
                                <motion.li
                                    key={i}
                                    className="flex gap-4 items-start"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.15 * i, duration: 0.5 }}
                                >
                                    <div
                                        className="mt-1 w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                                        style={{ background: 'linear-gradient(135deg, #4d81b7, #b7d2ea)' }}
                                    >
                                        <Check size={13} className="text-[#0a0e1a]" strokeWidth={3} />
                                    </div>
                                    <div>
                                        <span className="font-bold text-[#111827] text-base">{v.title}</span>
                                        <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">{v.desc}</p>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl shadow-black/10">
                            <img
                                src="/doctor-park.jpg"
                                alt="박철홍 원장"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="absolute -bottom-6 -left-6 p-6 rounded-2xl shadow-xl max-w-[250px]"
                            style={{ background: 'linear-gradient(135deg, #081a2f, #184a78)', border: '1px solid rgba(122,167,214,0.25)' }}
                        >
                            <p className="text-xs tracking-widest uppercase mb-2" style={{ color: '#7aa7d6' }}>대표원장</p>
                            <p className="text-white text-xl font-black mb-1">박 철 홍</p>
                            <p className="text-gray-300 text-sm">정형외과 의학박사 · 전문의</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="absolute -top-5 -right-5 px-5 py-4 rounded-2xl shadow-xl text-center"
                            style={{ background: 'linear-gradient(135deg, #7aa7d6, #d7e7f7)', boxShadow: '0 12px 40px rgba(16,53,89,0.25)' }}
                        >
                            <p className="text-[#0a0e1a] text-3xl font-black">14년</p>
                            <p className="text-[#0a0e1a]/70 text-xs font-semibold mt-0.5">목포시의료원 근무</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
