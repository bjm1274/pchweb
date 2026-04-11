import { useState } from 'react';
import { motion } from 'framer-motion';

const teams = [
    {
        no: '01',
        title: '병동팀',
        desc: '입원 중 회복 상태를 살피고 병실 생활을 안내합니다.',
        points: ['회복 확인', '입원 안내', '퇴원 설명'],
        image: '/team-ward.jpg',
    },
    {
        no: '02',
        title: '수술팀',
        desc: '수술 전 준비와 수술 중 보조를 맡습니다.',
        points: ['수술 준비', '감염 관리', '수술 보조'],
        image: '/team-surgery.jpg',
    },
    {
        no: '03',
        title: '외래팀',
        desc: '외래 진료 흐름을 돕고 환자 안내를 맡습니다.',
        points: ['진료 안내', '대기 안내', '환자 응대'],
        image: '/team-outpatient.jpg',
    },
    {
        no: '04',
        title: '검사팀',
        desc: '검사 준비와 이동 동선을 안내합니다.',
        points: ['검사 안내', '촬영 준비', '검사 설명'],
        image: '/team-exam.jpg',
    },
    {
        no: '05',
        title: '총무팀',
        desc: '병원 운영과 내부 지원 업무를 맡습니다.',
        points: ['행정 지원', '내부 운영', '업무 관리'],
        image: '/team-admin.jpg',
    },
    {
        no: '06',
        title: '원무팀',
        desc: '접수, 수납, 서류 발급을 도와드립니다.',
        points: ['접수', '수납', '서류 발급'],
        image: '/team-frontdesk.jpg',
    },
    {
        no: '07',
        title: '관리팀',
        desc: '시설과 환경을 관리해 안전한 병원 이용을 돕습니다.',
        points: ['시설 관리', '환경 관리', '안전 점검'],
        image: '/team-facility.jpg',
    },
    {
        no: '08',
        title: '영양팀',
        desc: '입원 환자 식사와 영양 관리를 맡습니다.',
        points: ['식단 관리', '배식 준비', '영양 관리'],
        image: '/team-nutrition.jpg',
    },
];

const TeamPhoto = ({ title, image }: { title: string; image: string }) => {
    const [imageError, setImageError] = useState(false);

    if (imageError) {
        return (
            <div
                className="h-full w-full flex flex-col items-center justify-center text-center px-6"
                style={{ background: 'linear-gradient(160deg, #eaf3fb 0%, #f8fbfe 100%)' }}
            >
                <p className="text-xs font-bold tracking-[0.18em] uppercase mb-3" style={{ color: '#4d81b7' }}>
                    팀 사진 자리
                </p>
                <p className="text-xl font-black text-[#111827] mb-2">{title}</p>
                <p className="text-sm text-slate-500 leading-relaxed mb-2">
                    아래 파일을 넣으면
                    <br />
                    이 자리에 단체사진이 표시됩니다.
                </p>
                <p className="text-xs font-mono text-[#184a78] bg-white/70 px-3 py-1.5 rounded-full">
                    public{image}
                </p>
            </div>
        );
    }

    return (
        <img
            src={image}
            alt={`${title} 단체사진`}
            className="h-full w-full object-cover"
            onError={() => setImageError(true)}
        />
    );
};

const SupportTeamSection = () => {
    return (
        <section className="py-28 bg-[#f4f8fc] relative overflow-hidden">
            <div
                className="absolute -top-24 right-0 w-80 h-80 rounded-full opacity-20"
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
                            <div style={{ width: 60, height: 2, background: 'linear-gradient(90deg, transparent, #4d81b7, transparent)' }} />
                            <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: '#4d81b7' }}>함께 돌보는 팀</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-[#111827] leading-tight">진료지원팀</h2>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {teams.map((team, i) => (
                        <motion.div
                            key={team.no}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.5, delay: i * 0.06 }}
                            className="bg-white rounded-3xl overflow-hidden border border-[#dbe7f3] shadow-sm hover:shadow-xl transition-all duration-500"
                        >
                            <div className="relative h-56 overflow-hidden border-b border-[#e4edf6]">
                                <TeamPhoto title={team.title} image={team.image} />
                                <div className="absolute top-4 left-4 text-5xl font-black leading-none select-none" style={{ color: 'rgba(215,231,247,0.95)' }}>
                                    {team.no}
                                </div>
                            </div>

                            <div className="p-7">
                                <h3 className="text-2xl font-black text-[#111827] mb-3">{team.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed mb-6">{team.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {team.points.map((point) => (
                                        <span
                                            key={point}
                                            className="px-2.5 py-1 rounded-full text-xs font-semibold"
                                            style={{ color: '#184a78', background: '#eaf3fb', border: '1px solid #cfe0f0' }}
                                        >
                                            {point}
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

export default SupportTeamSection;
