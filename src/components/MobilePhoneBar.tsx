import { PhoneCall, Clock } from 'lucide-react';

/**
 * ✅ 신규: 모바일 하단 고정 전화 CTA 바
 * App.tsx의 <main> 하단에 추가하세요:
 *   import MobilePhoneBar from './components/MobilePhoneBar';
 *   <MobilePhoneBar />
 */
const MobilePhoneBar = () => {
    return (
        <div
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
            style={{
                background: 'rgba(8,26,47,0.95)',
                borderTop: '1px solid rgba(122,167,214,0.2)',
                backdropFilter: 'blur(16px)',
                paddingBottom: 'env(safe-area-inset-bottom)',
            }}
        >
            <div className="flex items-center gap-2 px-4 py-3">
                <a
                    href="tel:061-277-1100"
                    className="flex flex-1 items-center justify-center gap-2.5 rounded-2xl py-3.5 font-black text-[#0a0e1a] text-base transition-all active:scale-95"
                    style={{ background: 'linear-gradient(135deg, #7aa7d6 0%, #d7e7f7 100%)' }}
                >
                    <PhoneCall size={19} />
                    061-277-1100
                </a>
                <a
                    href="#location"
                    className="flex items-center justify-center gap-2 rounded-2xl px-4 py-3.5 font-bold text-sm text-white transition-all active:scale-95"
                    style={{ border: '1px solid rgba(122,167,214,0.35)', background: 'rgba(122,167,214,0.08)' }}
                >
                    <Clock size={16} style={{ color: '#7aa7d6' }} />
                    진료시간
                </a>
            </div>
        </div>
    );
};

export default MobilePhoneBar;
