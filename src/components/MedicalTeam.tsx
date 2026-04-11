import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const cards = [
    {
        name: '박철홍',
        role: '대표원장 · 정형외과 의학박사 · 전문의',
        img: '/doctor-park.jpg',
        summary: '인공관절 수술 10,000례 이상 경험. Mako 로봇으로 더 정확한 인공관절 수술을 집도합니다.',
        career: [
            '전남대학교 의과대학 졸업 (대한의학협회상 수상)',
            '전남대학교병원 정형외과 수료 (수석합격)',
            '의학박사 (관절염 연구)',
            '목포시의료원 척추·관절클리닉 센터장 및 겸임교수 역임',
            '해외연수 다수 (United, Stryker, Mitek 등)',
        ],
        tags: ['인공관절', '관절내시경', '절골술', '줄기세포', '관절보존'],
        badge: '대표원장',
        featured: true,
    },
    {
        name: '김성미',
        role: '협력의료진 · 영상의학과 전문의',
        img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=870&auto=format&fit=crop',
        summary: 'MRI와 CBCT 등 영상 검사를 바탕으로 정확한 진단을 돕습니다.',
        career: [
            '영상의학과 전문의',
            '북구 우리들병원 근무 경력',
            '수술 전후 영상 판독 협진',
        ],
        tags: ['MRI 판독', '영상 검사', '협진'],
        badge: '협력의료진',
        featured: false,
    },
    {
        name: '박지선',
        role: '협력의료진 · 마취통증의학과 전문의',
        img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=870&auto=format&fit=crop',
        summary: '수술 전후 통증 관리와 회복 과정을 함께 살핍니다.',
        career: [
            '마취통증의학과 전문의',
            '수술 전후 통증 관리 협진',
            '환자 상태 확인과 회복 지원',
        ],
        tags: ['통증 관리', '회복 지원', '협진'],
        badge: '협력의료진',
        featured: false,
    },
];

const MedicalTeam = () => {
    return (
        <section
            id="team"
            className="py-28 relative overflow-hidden"
            style={{ background: 'linear-gradient(160deg, #081a2f 0%, #103559 100%)' }}
        >
            <div
                className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #7aa7d6, transparent 70%)' }}
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
                            <div style={{ width: 60, height: 2, background: 'linear-gradient(90deg, #4d81b7, transparent)' }} />
                            <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: '#4d81b7' }}>의료진</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">의료진</h2>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {cards.map((card, i) => (
                        <motion.div
                            key={card.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.55, delay: i * 0.1 }}
                            className={`relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${card.featured ? 'ring-1 ring-[#7aa7d6]/40' : ''}`}
                            style={{ background: '#163b60', border: '1px solid rgba(255,255,255,0.06)' }}
                        >
                            <div
                                className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-black"
                                style={{ background: 'linear-gradient(135deg, #7aa7d6, #d7e7f7)', color: '#0a0e1a' }}
                            >
                                {card.badge}
                            </div>

                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={card.img}
                                    alt={card.name}
                                    className="w-full h-full object-cover object-top grayscale transition-all duration-700 brightness-75"
                                />
                                <div
                                    className="absolute inset-0"
                                    style={{ background: 'linear-gradient(to top, #163b60 20%, rgba(22,59,96,0.1))' }}
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-black text-white mb-1">{card.name}</h3>
                                <p className="text-gray-300 text-sm mb-4">{card.role}</p>
                                <p className="text-sm text-gray-100 leading-relaxed mb-5">{card.summary}</p>

                                <div className="flex flex-wrap gap-2 mb-5">
                                    {card.tags.map((item) => (
                                        <span
                                            key={item}
                                            className="px-2.5 py-1 rounded-full text-xs font-medium text-[#d7e7f7]"
                                            style={{ background: 'rgba(122,167,214,0.12)', border: '1px solid rgba(122,167,214,0.24)' }}
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                <ul className="space-y-2 border-t border-white/10 pt-4">
                                    {card.career.map((item, index) => (
                                        <li key={index} className="flex items-start gap-2 text-xs text-gray-300 leading-relaxed">
                                            <GraduationCap size={12} className="shrink-0 mt-0.5" style={{ color: '#7aa7d6' }} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MedicalTeam;
