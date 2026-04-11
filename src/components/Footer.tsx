const Footer = () => (
    <footer style={{ background: '#081a2f', borderTop: '1px solid rgba(122,167,214,0.15)' }} className="py-8">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between gap-6 mb-6 pb-6 border-b border-white/10">
                <div>
                    <div className="mb-4">
                        <img
                            src="/pch-logo.png"
                            alt="박철홍정형외과 로고"
                            className="h-11 w-auto object-contain"
                        />
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                        대표원장 박철홍 · 정형외과 의학박사 · 전문의<br />
                        전라남도 목포시 송림로 73<br />
                        Tel. 061-277-1100 / Fax. 061-277-1101
                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-600">
                <p>© {new Date().getFullYear()} 박철홍정형외과. 모든 권리를 보유합니다.</p>
                <p>본 웹사이트의 모든 콘텐츠는 저작권법의 보호를 받으며 무단 복제를 금합니다.</p>
            </div>
        </div>
    </footer>
);

export default Footer;
