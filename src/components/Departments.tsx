import { motion } from 'framer-motion';

const depts = [
    {
        no: '01',
        title: '무릎 · 고관절 통증',
        sub: '관절 진료',
        tags: ['무릎 통증', '관절염', '인공관절 상담'],
        img: '/dept-joint.webp',
    },
    {
        no: '02',
        title: '허리 통증',
        sub: '척추 상담',
        tags: ['허리디스크', '척추관 협착증', '허리 통증'],
        img: '/dept-spine.webp',
    },
    {
        no: '03',
        title: '어깨 · 스포츠 손상',
        sub: '어깨 진료',
        tags: ['어깨 통증', '오십견', '인대 손상'],
        img: '/dept-sports.webp',
    },
    {
        no: '04',
        title: '골절 · 외상',
        sub: '골절 치료',
        tags: ['골절', '깁스 치료', '부상 치료'],
        img: '/dept-trauma.webp',
    },
    {
        no: '05',
        title: '비수술 통증치료',
        sub: '초음파 · 주사치료',
        tags: ['초음파 검사', '주사치료', '체외충격파'],
        img: '/dept-pain.webp',
    },
    {
        no: '06',
        title: '수술 후 재활',
        sub: '보행 회복',
        tags: ['보행 훈련', '관절 운동', '통증 관리'],
        img: '/dept-recovery.webp',
    },
];

const Departments = () => {
    return (
        <section
            id="departments"
            className="py-28 relative overflow-hidden"
            style={{ background: 'linear-gradient(160deg, #081a2f 0%, #103559 100%)' }}
        >
            <div
                className="absolute top-[-120px] left-[-80px] w-[400px] h-[400px] rounded-full opacity-10"
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
                            <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: '#4d81b7' }}>진료 분야</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">주요 진료 분야</h2>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {depts.map((d, i) => (
                        <motion.div
                            key={d.no}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.55, delay: i * 0.08 }}
                            className="group relative rounded-2xl overflow-hidden hover-lift"
                            style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={d.img}
                                    alt={d.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-90"
                                />
                                <div
                                    className="absolute inset-0"
                                    style={{ background: 'linear-gradient(to top, #081a2f 30%, rgba(8,26,47,0.2))' }}
                                />

                                <div className="absolute top-5 left-5 text-6xl font-black opacity-10 text-white leading-none select-none">
                                    {d.no}
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-6" style={{ background: 'linear-gradient(to top, #081a2f, transparent)' }}>
                                <p className="text-xs tracking-widest uppercase mb-2 font-semibold" style={{ color: '#7aa7d6' }}>{d.sub}</p>
                                <h3 className="text-xl font-black text-white mb-3">{d.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {d.tags.map((t) => (
                                        <span
                                            key={t}
                                            className="px-2.5 py-1 rounded-full text-xs font-medium text-gray-200"
                                            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Departments;
