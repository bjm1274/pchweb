import { motion } from 'framer-motion';
import { Award, Cpu } from 'lucide-react';

const equipments = [
    {
        id: '01',
        brand: 'Stryker',
        name: 'Mako 로봇수술 장비',
        model: '무릎 · 고관절 인공관절 수술',
        category: '로봇 인공관절 수술',
        desc: '수술 전에 계획을 세우고, 더 세밀한 인공관절 수술을 돕는 장비입니다.',
        highlights: ['CT 기반 계획', '정밀한 수술 보조', '무릎·고관절 수술'],
        img: '/equipment-mako.png',
        imageClass: 'object-contain p-5',
        imageBackground: '#f4f7fb',
        accent: '#1e5a96',
    },
    {
        id: '02',
        brand: 'Philips',
        name: 'MRI 1.5T',
        model: '2021년식 Philips MRI',
        category: '정밀 검사 장비',
        desc: '관절과 척추, 연부조직을 자세히 보는 검사 장비입니다.',
        highlights: ['척추 검사', '관절 검사', '수술 전후 확인'],
        img: '/equipment-philips-mri.jpg',
        imageClass: 'object-cover',
        imageBackground: '#eef4fb',
        accent: '#4d81b7',
    },
    {
        id: '03',
        brand: 'LNC-AI',
        name: 'Phion 2.0 CBCT',
        model: '3D 입체 영상 검사',
        category: '뼈 정렬 확인',
        desc: '뼈 모양과 정렬을 입체적으로 확인하는 검사 장비입니다.',
        highlights: ['3D 영상', '뼈 구조 확인', '정렬 확인'],
        img: '/equipment-phion-2.jpg',
        imageClass: 'object-contain p-6',
        imageBackground: '#f7f8fa',
        accent: '#2b6ca3',
    },
    {
        id: '04',
        brand: 'Seers Technology',
        name: '환자 모니터링 장비',
        model: '병동 · 회복실 모니터링',
        category: '환자 상태 확인',
        desc: '회복실과 병동에서 환자 상태를 실시간으로 확인하는 장비입니다.',
        highlights: ['회복실 모니터링', '병동 모니터링', '실시간 확인'],
        img: '/equipment-seers.png',
        imageClass: 'object-contain p-5',
        imageBackground: '#f4f7fb',
        accent: '#86afd7',
    },
];

const EquipmentSection = () => {
    return (
        <section id="equipment" className="py-28 bg-[#f4f8fc] relative overflow-hidden">
            <div
                className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #b7d2ea66, transparent 70%)' }}
            />

            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-4 mb-5">
                            <div
                                style={{
                                    width: 60,
                                    height: 2,
                                    background: 'linear-gradient(90deg, transparent, #4d81b7, transparent)',
                                }}
                            />
                            <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: '#4d81b7' }}>
                                장비 안내
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-[#111827] leading-tight">핵심 장비</h2>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {equipments.map((eq, i) => (
                        <motion.div
                            key={eq.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100/80 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                        >
                            <div className="relative h-48 overflow-hidden" style={{ background: eq.imageBackground }}>
                                <img
                                    src={eq.img}
                                    alt={eq.name}
                                    className={`w-full h-full transition-all duration-700 hover:scale-[1.02] ${eq.imageClass}`}
                                />
                                <div
                                    className="absolute inset-0"
                                    style={{ background: 'linear-gradient(to top, rgba(255,255,255,1) 5%, transparent)' }}
                                />
                                <div
                                    className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-black"
                                    style={{
                                        background: '#081a2f',
                                        color: '#b7d2ea',
                                        border: '1px solid rgba(122,167,214,0.3)',
                                        letterSpacing: '0.1em',
                                    }}
                                >
                                    {eq.brand}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-start justify-between gap-2 mb-3">
                                    <div>
                                        <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: eq.accent }}>
                                            {eq.category}
                                        </p>
                                        <h3 className="text-xl font-black text-[#111827] leading-tight">{eq.name}</h3>
                                        <p className="text-xs text-gray-400 mt-0.5 font-medium">{eq.model}</p>
                                    </div>
                                    <div
                                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                                        style={{ background: `${eq.accent}15` }}
                                    >
                                        <Cpu size={18} style={{ color: eq.accent }} />
                                    </div>
                                </div>

                                <p className="text-gray-500 text-sm leading-relaxed mb-5">{eq.desc}</p>

                                <ul className="space-y-2">
                                    {eq.highlights.map((highlight) => (
                                        <li key={highlight} className="flex items-center gap-2 text-xs font-semibold text-gray-600">
                                            <Award size={12} style={{ color: eq.accent }} className="shrink-0" />
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="h-0.5 w-full" style={{ background: `linear-gradient(to right, ${eq.accent}, transparent)` }} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EquipmentSection;
