const Footer = () => (
    <footer style={{ background: '#081a2f', borderTop: '1px solid rgba(122,167,214,0.15)' }} className="py-10">
        <div className="max-w-7xl mx-auto px-6">

            {/* 상단: 로고 + 정보 + 빠른 링크 */}
            <div className="flex flex-col md:flex-row justify-between gap-10 mb-8 pb-8 border-b border-white/10">
                <div className="max-w-sm">
                    <div className="mb-4">
                        <img
                            src="/pch-logo.png"
                            alt="박철홍정형외과 로고"
                            className="h-11 w-auto object-contain"
                        />
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        대표원장 박철홍 · 정형외과 의학박사 · 전문의<br />
                        전라남도 목포시 송림로 73<br />
                        Tel. 061-277-1100 &nbsp;/&nbsp; Fax. 061-277-1101
                    </p>
                    {/* ✅ 추가: 사업자 정보 */}
                    <p className="text-gray-600 text-xs leading-relaxed mt-3">
                        의료기관명: 박철홍정형외과의원<br />
                        대표자: 박철홍 · 사업자등록번호: 000-00-00000
                    </p>
                </div>

                {/* ✅ 추가: 빠른 메뉴 */}
                <div className="flex flex-wrap gap-12">
                    <div>
                        <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: '#4d81b7' }}>진료 안내</p>
                        <ul className="space-y-2">
                            {['병원 소개', '의료진', '진료 분야', '핵심 장비', '오시는 길'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-500 text-sm hover:text-gray-200 transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: '#4d81b7' }}>진료 시간</p>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>월–금 &nbsp;08:30 – 19:00</li>
                            <li>토요일 08:30 – 13:00</li>
                            <li className="text-red-400/80">일요일 휴진</li>
                        </ul>
                        <a
                            href="tel:061-277-1100"
                            className="inline-flex items-center gap-1.5 mt-4 text-sm font-bold transition-colors"
                            style={{ color: '#7aa7d6' }}
                        >
                            📞 061-277-1100
                        </a>
                    </div>
                </div>
            </div>

            {/* 하단: 저작권 + ✅ 개인정보처리방침 */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-600">
                <p>© {new Date().getFullYear()} 박철홍정형외과. 모든 권리를 보유합니다.</p>
                <div className="flex items-center gap-4">
                    {/* ✅ 추가: 개인정보처리방침 링크 */}
                    <a href="/privacy" className="hover:text-gray-400 transition-colors underline underline-offset-2">
                        개인정보처리방침
                    </a>
                    <span>|</span>
                    <p>본 웹사이트의 모든 콘텐츠는 저작권법의 보호를 받습니다.</p>
                </div>
            </div>

        </div>
    </footer>
);

export default Footer;
