import { motion } from 'framer-motion';
import { Clock, MapPin, PhoneCall, Car, Bus, ExternalLink, Navigation } from 'lucide-react';

const hours = [
    { day: '월 - 금', time: '08:30 - 18:00', note: null },
    { day: '토요일', time: '08:30 - 13:00', note: '오후 1시까지 진료' },
    { day: '일요일', time: '휴진', note: null, closed: true },
    { day: '야간진료', time: '없음', note: null },
];

const naverMapUrl = 'https://map.naver.com/p/search/%EC%A0%84%EB%9D%BC%EB%82%A8%EB%8F%84%20%EB%AA%A9%ED%8F%AC%EC%8B%9C%20%EC%86%A1%EB%A6%BC%EB%A1%9C%2073';

// ✅ 카카오 지도 iframe URL (박철홍정형외과 위치)
// 카카오맵에서 장소 공유 > 지도 퍼가기 URL로 교체하세요
const trafficCards = [
    {
        icon: <Bus size={20} style={{ color: '#7aa7d6' }} />,
        title: '버스 이용',
        desc: '목포시의료원 · 청해사 정류장에서 내리면 가깝습니다.',
    },
    {
        icon: <Car size={20} style={{ color: '#7aa7d6' }} />,
        title: '자가용 이용',
        desc: '외래환자 2시간 무료입니다.',
    },
];

const LocationInfo = () => {
    return (
        <section id="location" className="py-28 bg-[#f4f8fc] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="flex items-center gap-4 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div style={{ width: 60, height: 2, background: 'linear-gradient(90deg, transparent, #4d81b7, transparent)' }} />
                    <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: '#4d81b7' }}>진료 안내</span>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-10 items-start">
                    {/* 왼쪽: 진료시간 + 전화 */}
                    <motion.div
                        className="lg:col-span-2 space-y-8"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65 }}
                    >
                        <div>
                            <h2 className="text-4xl font-black text-[#111827] mb-2">진료 시간</h2>
                        </div>

                        <div className="rounded-3xl overflow-hidden" style={{ background: '#111827' }}>
                            <div className="flex items-center gap-3 px-7 py-5 border-b border-white/10">
                                <Clock size={18} style={{ color: '#7aa7d6' }} />
                                <span className="text-white font-bold">진료 시간</span>
                            </div>
                            <ul className="divide-y divide-white/10">
                                {hours.map((h, i) => (
                                    <li key={i} className="flex justify-between items-center px-7 py-4">
                                        <span className={`text-sm font-semibold ${h.closed ? 'text-red-400' : 'text-gray-300'}`}>
                                            {h.day}
                                        </span>
                                        <div className="text-right">
                                            <span className={`font-bold ${h.closed ? 'text-red-400' : 'text-white'}`}>{h.time}</span>
                                            {h.note && <p className="text-xs text-gray-500 mt-0.5">{h.note}</p>}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <a
                            href="tel:061-277-1100"
                            className="group flex items-center gap-4 w-full px-7 py-5 rounded-2xl transition-opacity hover:opacity-90"
                            style={{ background: 'linear-gradient(135deg, #7aa7d6, #d7e7f7)', boxShadow: '0 16px 48px rgba(16,53,89,0.2)' }}
                        >
                            <div className="w-12 h-12 rounded-full bg-[#0a0e1a]/20 flex items-center justify-center">
                                <PhoneCall size={22} className="text-[#0a0e1a]" />
                            </div>
                            <div>
                                <p className="text-[#0a0e1a]/60 text-xs font-semibold mb-0.5">전화 문의</p>
                                <p className="text-[#0a0e1a] text-2xl font-black tracking-widest">061-277-1100</p>
                                <p className="text-[#0a0e1a]/70 text-xs font-semibold mt-1">Fax 061-277-1101</p>
                            </div>
                        </a>
                    </motion.div>

                    {/* 오른쪽: 지도 + 교통 */}
                    <motion.div
                        className="lg:col-span-3 space-y-6"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, delay: 0.15 }}
                    >
                        <div>
                            <h2 className="text-4xl font-black text-[#111827] mb-2">오시는 길</h2>
                        </div>

                        {/* ✅ 추가: 카카오 지도 (광고 없는 깔끔한 이미지 맵) */}
                        <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 relative group" style={{ height: 300 }}>
                            <a
                                href="https://map.kakao.com/?urlX=363948&urlY=364330&urlLevel=4&map_type=TYPE_MAP&map_hybrid=false"
                                target="_blank"
                                rel="noreferrer"
                                className="block w-full h-full relative"
                            >
                                <img
                                    src="https://staticmap.kakao.com/map/mapservice?FORMAT=PNG&SCALE=5&MX=363948&MY=364330&S=0&IW=800&IH=400&LANG=0&COORDSTM=WCONGNAMUL&logo=kakao_logo"
                                    alt="박철홍정형외과 지도"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    style={{ display: 'block', border: 'none' }}
                                />
                                {/* 지도 오버레이 (카카오 로고 및 안내) */}
                                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md border border-gray-200/50 flex items-center gap-2">
                                    <img src="//t1.kakaocdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png" width="56" height="12" alt="카카오맵" />
                                    <span className="text-xs font-bold text-gray-700">지도 크게 보기</span>
                                </div>
                            </a>
                        </div>

                        {/* 주소 + 버튼 */}
                        <div
                            className="relative overflow-hidden rounded-3xl"
                            style={{ background: 'linear-gradient(160deg, #081a2f 0%, #103559 100%)' }}
                        >
                            <div className="relative p-6 md:p-8 flex flex-col sm:flex-row sm:items-center gap-5 justify-between">
                                <div className="flex items-start gap-3">
                                    <MapPin size={18} style={{ color: '#7aa7d6' }} className="mt-0.5 shrink-0" />
                                    <div>
                                        <p className="text-white font-bold text-base">전라남도 목포시 송림로 73</p>
                                        <p className="text-slate-400 text-sm mt-0.5">박철홍정형외과</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href={naverMapUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-black text-[#081a2f] transition-all hover:brightness-110"
                                        style={{ background: 'linear-gradient(135deg, #7aa7d6 0%, #d7e7f7 100%)' }}
                                    >
                                        네이버지도
                                        <ExternalLink size={14} />
                                    </a>
                                    <a
                                        href={naverMapUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-black text-white transition-colors"
                                        style={{ border: '1px solid rgba(255,255,255,0.18)' }}
                                    >
                                        길찾기
                                        <Navigation size={14} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {trafficCards.map((t) => (
                                <div
                                    key={t.title}
                                    className="flex gap-4 p-5 rounded-2xl"
                                    style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.06)' }}
                                >
                                    <div
                                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                                        style={{ background: 'rgba(122,167,214,0.12)' }}
                                    >
                                        {t.icon}
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm mb-0.5">{t.title}</p>
                                        <p className="text-gray-400 text-xs leading-relaxed">{t.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LocationInfo;
