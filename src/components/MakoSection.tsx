import { motion } from 'framer-motion';
import { Activity, CheckCircle2, ScanSearch, ShieldCheck, Plus } from 'lucide-react';

const introCards = [
    {
        title: 'CT로 먼저 확인',
        desc: '수술 전에 3D CT로 관절 상태를 먼저 확인합니다.',
    },
    {
        title: '내 관절에 맞춘 계획',
        desc: '환자 상태에 맞춰 수술 계획을 먼저 세웁니다.',
    },
    {
        title: '로봇팔이 수술 보조',
        desc: '계획된 범위 안에서 더 세밀한 절삭을 돕습니다.',
    },
];

const stats = [
    { value: '200만+', label: '전세계 누적 수술' },
    { value: '45개국+', label: '설치 국가' },
    { value: '500건+', label: '임상 연구' },
];

const surgerySteps = [
    {
        step: '01',
        title: '수술 전 CT 촬영 (맞춤설계)',
        desc: '환자 뼈 모양을 3D로 분석하고, 컴퓨터로 가장 맞는 인공관절 위치와 크기를 미리 계획합니다.',
        tip: '환자 뼈에 맞는 "맞춤 지도"를 미리 만들어 놓는 단계입니다.',
        icon: ScanSearch,
    },
    {
        step: '02',
        title: '수술 시작 (마취 후 진행)',
        desc: '척추마취 또는 전신마취 후 진행합니다. 무릎 절개 후 Mako 시스템이 환자의 뼈 위치를 인식합니다.',
        tip: null,
        icon: ShieldCheck,
    },
    {
        step: '03',
        title: '로봇팔로 정확하게 뼈 절삭',
        desc: '수술 전 3D 계획을 기반으로 로봇팔이 정해진 범위 안에서만 움직이도록 제한됩니다. 과도한 절삭 방지, 정확한 각도 유지.',
        tip: '"자동안전장치가 달린 정밀 절삭기"라고 생각하면 됩니다.',
        icon: Activity,
    },
    {
        step: '04',
        title: '인공관절 삽입',
        desc: '금속 인공관절과 플라스틱 연골 부분을 넣어 새 관절을 만들어 줍니다. 관절 균형과 움직임을 다시 확인합니다.',
        tip: null,
        icon: Plus,
    },
    {
        step: '05',
        title: '상처 봉합 후 회복',
        desc: '수술이 끝나면 절개 부위 봉합 후 회복실로 이동합니다.',
        tip: '2일 후 보행 시작 · 2주 재활',
        icon: Activity,
    },
];

const comparisonRows = [
    {
        label: '수술 전 계획',
        mako: 'CT 기반 3D 맞춤 계획. 타 로봇 대비 가장 정밀한 사전 설계가 가능합니다.',
        rosa: 'imageless 또는 image-based 방식 선택 가능.',
        cuvis: '영상 데이터 기반 계획.',
        highlight: false,
    },
    {
        label: '로봇팔 절삭 방식',
        mako: '로봇팔이 직접 절삭을 보조하며, 계획 범위를 벗어나면 자동으로 움직임을 제한합니다.',
        rosa: '로봇 가이드 중심. 직접 절삭 보조와 방식이 다릅니다.',
        cuvis: '로봇 가이드 중심으로, 절삭 정밀도는 의사 판단에 의존합니다.',
        highlight: false,
    },
    {
        label: '햅틱 조직보호 기능',
        mako: '계획 범위 밖으로 나가면 저항이 발생해 조직 손상을 방지합니다. ★ Mako만의 고유 기능.',
        rosa: '해당 기능 없음.',
        cuvis: '해당 기능 없음.',
        highlight: true,
    },
    {
        label: '적용 부위',
        mako: '무릎 전치환·부분치환 + 고관절 전치환. 가장 폭넓게 적용 가능.',
        rosa: '무릎 수술 중심 (ROSA Knee 공식 자료 기준).',
        cuvis: '무릎 수술 중심. 2025년 고관절 확대 보도 있음.',
        highlight: false,
    },
];

const comparisonCards = [
    {
        name: 'Mako',
        tone: 'Mako를 선택하는 이유',
        desc: 'CT 기반 3D 계획 + 로봇팔 정밀 절삭 + 햅틱 조직보호 기능을 모두 갖춘 시스템입니다.',
        points: ['CT 기반 3D 맞춤 계획', '로봇팔 직접 절삭 보조', '햅틱 조직보호 기능 (타 로봇에 없음)', '무릎·고관절 모두 적용'],
        accent: '#4d81b7',
        background: 'linear-gradient(160deg, #081a2f 0%, #103559 100%)',
        textColor: 'text-white',
        tagColor: 'text-[#d7e7f7]',
        borderColor: 'rgba(122,167,214,0.20)',
    },
    {
        name: 'ROSA Knee',
        tone: 'Zimmer 대표 공개 자료',
        desc: '영상 없이도 가능하고, 실시간 데이터 확인 기능을 앞세웁니다.',
        points: ['imageless 가능', 'image-based 옵션', '데이터 기반 기능', '햅틱 조직보호 없음'],
        accent: '#0f766e',
        background: '#ffffff',
        textColor: 'text-[#111827]',
        tagColor: 'text-slate-600',
        borderColor: 'rgba(15,118,110,0.14)',
    },
    {
        name: 'CUVIS-joint',
        tone: 'Curexo 대표 공개 자료',
        desc: '수술 전 영상 데이터를 바탕으로 계획하고 정밀 절삭을 강조합니다.',
        points: ['영상 데이터 기반', '로봇 가이드 절삭', '무릎 중심 공개', '햅틱 조직보호 없음'],
        accent: '#7c3aed',
        background: '#ffffff',
        textColor: 'text-[#111827]',
        tagColor: 'text-slate-600',
        borderColor: 'rgba(124,58,237,0.14)',
    },
];

const MakoSection = () => {
    return (
        <section id="mako" className="py-28 bg-white relative overflow-hidden">
            <div
                className="absolute -top-24 right-[-80px] h-[380px] w-[380px] rounded-full opacity-20 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(122,167,214,0.35), transparent 72%)' }}
            />

            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-4 mb-5">
                            <div style={{ width: 60, height: 2, background: 'linear-gradient(90deg, #4d81b7, transparent)' }} />
                            <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: '#4d81b7' }}>Mako 로봇수술</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-[#111827] leading-tight">
                            Mako 로봇수술은
                            <br />
                            <span style={{ color: '#4d81b7' }}>무엇이 다른가요?</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-8 items-stretch">
                    {/* 왼쪽: Mako란? (축소 버전) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6 }}
                        className="rounded-[32px] p-6 md:p-8 text-white relative overflow-hidden"
                        style={{ background: 'linear-gradient(160deg, #081a2f 0%, #103559 100%)' }}
                    >
                        <div
                            className="absolute inset-0 opacity-20"
                            style={{ background: 'radial-gradient(circle at top right, rgba(122,167,214,0.55), transparent 42%)' }}
                        />

                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-black mb-3">Mako란?</h3>
                            <p className="text-base text-slate-200 leading-relaxed mb-6 max-w-xl">
                                Mako는 수술 전에 3D CT로 내 관절을 먼저 확인하고,
                                수술 계획을 세운 뒤 로봇팔이 계획된 범위 안에서 인공관절 수술을 돕는 시스템입니다.
                            </p>

                            <div className="grid gap-3 mb-6">
                                {introCards.map((item) => (
                                    <div
                                        key={item.title}
                                        className="rounded-xl p-4"
                                        style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
                                    >
                                        <h4 className="text-base font-black text-white mb-1">{item.title}</h4>
                                        <p className="text-xs text-slate-200 leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="grid sm:grid-cols-3 gap-3">
                                {stats.map((item) => (
                                    <div
                                        key={item.label}
                                        className="rounded-2xl px-4 py-4"
                                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }}
                                    >
                                        <p className="text-2xl font-black text-white leading-none">{item.value}</p>
                                        <p className="text-xs text-slate-300 mt-2 leading-relaxed">{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* 오른쪽: MAKO 수술과정 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6, delay: 0.08 }}
                        className="rounded-[32px] overflow-hidden border border-[#d7e7f7] bg-[#f8fbfe] shadow-[0_28px_70px_rgba(16,53,89,0.10)]"
                    >
                        <div className="p-6 md:p-8">
                            {/* 핵심 메시지 배지 */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-4"
                                style={{ background: 'rgba(77,129,183,0.12)', color: '#4d81b7' }}>
                                의사가 집도 · 로봇이 정확도 보조
                            </div>
                            <h3 className="text-2xl font-black text-[#081a2f] mb-2">MAKO 수술, 이렇게 진행됩니다</h3>
                            <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                로봇이 대신 수술하는 것이 아닙니다. 의사가 직접 수술을 집도하고,
                                로봇이 정확도를 높여주는 방식으로 진행됩니다.
                            </p>

                            {/* 수술 단계 타임라인 */}
                            <div className="space-y-1">
                                {surgerySteps.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={item.step} className="flex gap-3">
                                            {/* 단계 번호 + 연결선 */}
                                            <div className="flex flex-col items-center">
                                                <div
                                                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-white text-xs font-black"
                                                    style={{ background: 'linear-gradient(135deg, #4d81b7, #103559)' }}
                                                >
                                                    {item.step}
                                                </div>
                                                {index < surgerySteps.length - 1 && (
                                                    <div className="w-0.5 flex-1 min-h-[16px] my-1" style={{ background: '#d7e7f7' }} />
                                                )}
                                            </div>

                                            {/* 내용 */}
                                            <div className="flex-1 pb-4">
                                                <div className="flex items-center gap-1.5 mb-1">
                                                    <Icon size={13} style={{ color: '#4d81b7' }} />
                                                    <h4 className="text-sm font-black text-[#081a2f]">{item.title}</h4>
                                                </div>
                                                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                                                {item.tip && (
                                                    <div
                                                        className="mt-2 px-3 py-1.5 rounded-lg text-xs font-semibold"
                                                        style={{ background: 'rgba(77,129,183,0.10)', color: '#4d81b7' }}
                                                    >
                                                        ⇛ {item.tip}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* 비교표 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.65, delay: 0.06 }}
                    className="mt-10 rounded-[32px] border border-[#d7e7f7] bg-[#f7fbfe] p-6 md:p-8 shadow-[0_20px_60px_rgba(16,53,89,0.08)]"
                >
                    {/* 비교표 헤더 */}
                    <div className="mb-6">
                        <h3 className="text-xl font-black text-[#081a2f] mb-1">다른 로봇수술 시스템과 비교</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            햅틱 조직보호 기능과 로봇팔 직접 절삭 보조는 Mako만이 갖춘 고유한 특징입니다.
                        </p>
                    </div>

                    {/* 데스크탑 테이블 */}
                    <div className="hidden lg:block overflow-hidden rounded-3xl border border-[#d7e7f7] bg-white">
                        <div className="grid grid-cols-[220px_1fr_1fr_1fr] bg-[#eef5fb] border-b border-[#d7e7f7]">
                            <div className="px-6 py-4 text-sm font-black text-[#081a2f]">비교 항목</div>
                            <div className="px-6 py-4 text-sm font-black text-[#081a2f] bg-[#e2eef9]">Mako</div>
                            <div className="px-6 py-4 text-sm font-black text-[#081a2f]">ROSA Knee</div>
                            <div className="px-6 py-4 text-sm font-black text-[#081a2f]">CUVIS-joint</div>
                        </div>

                        {comparisonRows.map((row, index) => (
                            <div
                                key={row.label}
                                className="grid grid-cols-[220px_1fr_1fr_1fr]"
                                style={{ borderTop: index === 0 ? '0' : '1px solid #e5eef8' }}
                            >
                                <div className="px-6 py-5 text-sm font-bold text-[#081a2f] bg-[#fbfdff] border-r border-[#e5eef8]">
                                    {row.label}
                                    {row.highlight && (
                                        <span className="ml-2 px-1.5 py-0.5 rounded text-[10px] font-black text-white align-middle"
                                            style={{ background: '#4d81b7' }}>
                                            핵심
                                        </span>
                                    )}
                                </div>
                                <div
                                    className="px-6 py-5 text-sm leading-relaxed border-r border-[#e5eef8]"
                                    style={{
                                        background: row.highlight ? 'rgba(77,129,183,0.08)' : '#f4f9ff',
                                        color: row.highlight ? '#103559' : '#374151',
                                        fontWeight: row.highlight ? 600 : 400,
                                    }}
                                >
                                    {row.mako}
                                </div>
                                <div className="px-6 py-5 text-sm text-slate-500 leading-relaxed border-r border-[#e5eef8]">
                                    {row.rosa}
                                </div>
                                <div className="px-6 py-5 text-sm text-slate-500 leading-relaxed">
                                    {row.cuvis}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 모바일 카드 */}
                    <div className="grid gap-4 lg:hidden">
                        {comparisonCards.map((card) => (
                            <div
                                key={card.name}
                                className={`rounded-3xl p-5 ${card.textColor}`}
                                style={{
                                    background: card.background,
                                    border: `1px solid ${card.borderColor}`,
                                }}
                            >
                                <p className={`text-xs font-bold tracking-[0.18em] uppercase mb-2 ${card.tagColor}`}>{card.tone}</p>
                                <h4 className="text-xl font-black mb-3">{card.name}</h4>
                                <p className={`text-sm leading-relaxed mb-4 ${card.tagColor}`}>{card.desc}</p>
                                <ul className="space-y-2">
                                    {card.points.map((point) => (
                                        <li key={point} className="flex items-start gap-2 text-sm leading-relaxed">
                                            <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: card.accent }} />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default MakoSection;
