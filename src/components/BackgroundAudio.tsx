import { useEffect, useRef, useState } from 'react';
import { Music, VolumeX } from 'lucide-react';

/**
 * ✅ 수정: 자동재생 제거 → 사용자가 직접 버튼을 눌러야 재생
 * 브라우저 정책상 사용자 인터랙션 없이 오디오 자동재생은 차단됩니다.
 */
const BackgroundAudio = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [playing, setPlaying] = useState(false);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        // 스크롤 후 일정 시간 뒤에 버튼 표시 (방해 최소화)
        const timer = setTimeout(() => setVisible(true), 3000);
        return () => clearTimeout(timer);
    }, []);

    const toggle = () => {
        if (!audioRef.current) return;
        if (playing) {
            audioRef.current.pause();
            setPlaying(false);
        } else {
            audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
        }
    };

    if (!visible) return null;

    return (
        <>
            {/* 오디오 파일은 /bgm.mp3 등 실제 파일로 교체하세요 */}
            <audio ref={audioRef} src="/bgm.mp3" loop preload="none" />

            <button
                type="button"
                onClick={toggle}
                aria-label={playing ? '배경음악 끄기' : '배경음악 켜기'}
                title={playing ? '배경음악 끄기' : '배경음악 켜기'}
                className="fixed bottom-24 right-5 z-50 w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95 md:bottom-8"
                style={{
                    background: playing
                        ? 'linear-gradient(135deg, #4d81b7, #7aa7d6)'
                        : 'rgba(8,26,47,0.75)',
                    border: '1px solid rgba(122,167,214,0.35)',
                    backdropFilter: 'blur(12px)',
                }}
            >
                {playing
                    ? <Music size={17} color="#fff" />
                    : <VolumeX size={17} color="#7aa7d6" />
                }
            </button>
        </>
    );
};

export default BackgroundAudio;
