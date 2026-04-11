import { useEffect, useRef } from 'react';

const BackgroundAudio = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.loop = true;

        const tryPlay = () => {
            const playPromise = audio.play();

            if (playPromise && typeof playPromise.then === 'function') {
                playPromise
                    .then(() => {
                        window.removeEventListener('pointerdown', tryPlay);
                        window.removeEventListener('keydown', tryPlay);
                        window.removeEventListener('touchstart', tryPlay);
                    })
                    .catch(() => {
                        // Browser autoplay policies may block sound until interaction.
                    });
            }
        };

        tryPlay();

        window.addEventListener('pointerdown', tryPlay, { passive: true });
        window.addEventListener('keydown', tryPlay);
        window.addEventListener('touchstart', tryPlay, { passive: true });

        return () => {
            window.removeEventListener('pointerdown', tryPlay);
            window.removeEventListener('keydown', tryPlay);
            window.removeEventListener('touchstart', tryPlay);
        };
    }, []);

    return (
        <audio
            ref={audioRef}
            src="/background-music.mp3"
            autoPlay
            preload="auto"
            playsInline
            className="hidden"
        />
    );
};

export default BackgroundAudio;
