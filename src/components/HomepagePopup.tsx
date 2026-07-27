import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';

type PopupMediaType = 'image' | 'video';

type PopupRow = {
  id: string;
  title: string;
  media_url: string | null;
  media_type: PopupMediaType | null;
  width: number | null;
  height: number | null;
  link_url: string | null;
  start_at: string | null;
  end_at: string | null;
  priority: number | null;
  is_active: boolean | null;
  created_at: string | null;
};

const DISMISS_PREFIX = 'pchos-popup-dismissed';

function getDismissKey(popupId: string) {
  const today = new Date().toISOString().slice(0, 10);
  return `${DISMISS_PREFIX}:${popupId}:${today}`;
}

function isDismissedToday(popupId: string) {
  try {
    return window.localStorage.getItem(getDismissKey(popupId)) === '1';
  } catch {
    return false;
  }
}

function dismissForToday(popupId: string) {
  try {
    window.localStorage.setItem(getDismissKey(popupId), '1');
  } catch {
    // ignore localStorage failures
  }
}

function normalizeDimension(value: number | null | undefined, fallback: number, min: number, max: number) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.min(Math.max(parsed, min), max);
}

function isVisibleNow(popup: PopupRow) {
  const now = Date.now();
  const startAt = popup.start_at ? new Date(popup.start_at).getTime() : null;
  const endAt = popup.end_at ? new Date(popup.end_at).getTime() : null;

  if (startAt && !Number.isNaN(startAt) && startAt > now) return false;
  if (endAt && !Number.isNaN(endAt) && endAt < now) return false;
  return true;
}

function isExternalLink(url: string) {
  return /^https?:\/\//i.test(url);
}

export default function HomepagePopup() {
  const [popup, setPopup] = useState<PopupRow | null>(null);
  const [closed, setClosed] = useState(false);

  const popupApiUrl = useMemo(() => {
    const baseUrl = import.meta.env.VITE_ERP_URL || 'https://erp.pchos.kr';
    return `${String(baseUrl).replace(/\/+$/, '')}/api/popups`;
  }, []);

  useEffect(() => {
    let cancelled = false;

    const fetchPopup = async () => {
      try {
        const response = await fetch(popupApiUrl, {
          headers: {
            Accept: 'application/json',
          },
        });

        if (!response.ok) return;

        const rows = (await response.json()) as PopupRow[];
        if (!Array.isArray(rows) || rows.length === 0) return;

        const candidate = rows.find((row) => {
          const hasMedia = typeof row.media_url === 'string' && row.media_url.trim().length > 0;
          return hasMedia && isVisibleNow(row) && !isDismissedToday(row.id);
        });

        if (!candidate || cancelled) return;

        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.setTimeout(() => {
          if (!cancelled) {
            setPopup(candidate);
          }
        }, reducedMotion ? 0 : 700);
      } catch {
        // ignore popup fetch failures on homepage
      }
    };

    void fetchPopup();

    return () => {
      cancelled = true;
    };
  }, [popupApiUrl]);

  useEffect(() => {
    if (!popup || closed) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setClosed(true);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [popup, closed]);

  const activePopup = popup && !closed ? popup : null;

  if (!activePopup) return null;

  const width = normalizeDimension(activePopup.width, 420, 280, 900);



  const handleClose = () => setClosed(true);

  const handleDismissToday = () => {
    dismissForToday(activePopup.id);
    setClosed(true);
  };

  return (
    <AnimatePresence>
      <motion.div
        key={activePopup.id}
        className="fixed inset-0 z-[90] flex items-center justify-center bg-[#081a2f]/72 px-4 py-6 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            handleClose();
          }
        }}
      >
        <div className="relative" style={{ maxWidth: `${width}px`, width: '100%' }}>
          {/* X 닫기 버튼 - 카드 바깥 오른쪽 위 */}
          <button
            type="button"
            onClick={handleClose}
            className="absolute -right-2 -top-12 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-600 shadow-lg transition hover:bg-white hover:text-slate-900"
            aria-label="팝업 닫기"
          >
            <X size={18} />
          </button>

          <motion.section
            className="relative w-full overflow-hidden rounded-2xl bg-white shadow-[0_32px_80px_rgba(8,26,47,0.35)]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="homepage-popup-title"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <h2 id="homepage-popup-title" className="sr-only">
              {activePopup.title || '홈페이지 팝업'}
            </h2>

            <div
              className="overflow-y-auto max-h-[70vh] scrollbar-thin"
            >
              {activePopup.media_type === 'video' ? (
                <video
                  src={activePopup.media_url || undefined}
                  className="w-full h-auto block object-cover"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={activePopup.media_url || undefined}
                  alt={activePopup.title || '박철홍정형외과 팝업'}
                  className="w-full h-auto block"
                />
              )}
            </div>

            <div className="flex items-center justify-center gap-3 px-4 py-3">
              {activePopup.link_url && (
                <a
                  href={activePopup.link_url}
                  target={isExternalLink(activePopup.link_url) ? '_blank' : '_self'}
                  rel={isExternalLink(activePopup.link_url) ? 'noreferrer noopener' : undefined}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#103559] px-5 text-sm font-bold text-white transition hover:bg-[#081a2f]"
                >
                  자세히 보기
                  <ExternalLink size={15} />
                </a>
              )}
              <button
                type="button"
                onClick={handleDismissToday}
                className="inline-flex h-11 items-center justify-center rounded-full border border-slate-300 bg-white px-5 text-sm font-bold text-slate-600 transition hover:border-slate-400 hover:text-slate-800"
              >
                오늘 하루 보지 않기
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="inline-flex h-11 items-center justify-center rounded-full bg-[#d7e7f7] px-5 text-sm font-bold text-[#103559] transition hover:bg-[#c4dbf2]"
              >
                닫기
              </button>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
