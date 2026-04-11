import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FileText, X } from 'lucide-react';

type GuideTabId = 'nonBenefit' | 'certificate';

type PatientGuideModalProps = {
  open: boolean;
  onClose: () => void;
};

const guideTabs: Array<{ id: GuideTabId; label: string; description: string }> = [
  {
    id: 'nonBenefit',
    label: '비급여 안내',
    description: '항목을 한 줄씩 읽기 쉽게 정리한 비급여 안내',
  },
  {
    id: 'certificate',
    label: '제증명 수수료',
    description: '발급 비용과 기준을 한 줄씩 확인하는 안내',
  },
];

const nonBenefitSections = [
  {
    title: '보조기 및 생활보조',
    items: [
      { name: 'MCLI', price: '140,000원' },
      { name: 'ACL', price: '235,000원' },
      { name: 'Long arm brace', price: '235,000원' },
      { name: 'Ultra Sling', price: '150,000원' },
      { name: 'T.L.S.O', price: '400,000원' },
      { name: 'MST 압박용밴드 3x50 / 4x55', price: '18,000원' },
      { name: 'MST 압박용밴드 3x70 / 4x90', price: '28,000원' },
      { name: '핑거커버', price: '5,000원' },
      { name: '멀티핑거 스프린트', price: '10,000원' },
      { name: '팔걸이', price: '3,500원' },
      { name: '컬러슈즈', price: '25,000원' },
      { name: 'Soft Collar', price: '10,000원' },
      { name: '벨포밴드', price: '9,000원' },
      { name: '소변기', price: '4,000원' },
      { name: '대변기', price: '5,000원' },
    ],
  },
  {
    title: '초음파 검사',
    items: [
      { name: '단순초음파 II (흉벽, 흉막, 늑골, 관절, 연부 포함)', price: '50,000원' },
      { name: '관절 초음파 (손가락)', price: '50,000원' },
      { name: '관절 초음파 (발가락)', price: '50,000원' },
      { name: '관절 초음파 (주관절)', price: '50,000원' },
      { name: '관절 초음파 (슬관절)', price: '50,000원' },
      { name: '관절 초음파 (고관절)', price: '50,000원' },
      { name: '관절 초음파 (견관절)', price: '50,000원' },
      { name: '관절 초음파 (손목관절)', price: '50,000원' },
      { name: '관절 초음파 (발목관절)', price: '50,000원' },
      { name: '연부조직 초음파 (일반)', price: '50,000원' },
    ],
  },
  {
    title: '치료재료 및 주사',
    items: [
      { name: 'B-MAC', price: '7,000,000원' },
      { name: '맥시제식주 1v', price: '650,000원' },
      { name: '삼진 타우로린주', price: '100,000원' },
      { name: '메가누보', price: '100,000원' },
      { name: 'ABEL', price: '1,800,000원' },
      { name: 'MEGA DBM 1cc', price: '500,000원' },
      { name: '메가누보 1cc', price: '200,000원' },
      { name: '리알로 인젝트 1cc', price: '350,000원' },
      { name: '메디클로 1cc', price: '300,000원' },
      { name: '데미오스 0.5cc', price: '300,000원' },
      { name: '데미오스 1cc', price: '500,000원' },
      { name: '데미오스 2.5cc', price: '800,000원' },
      { name: '리센씰 3% 1cc', price: '200,000원' },
      { name: '리센씰 6% 1cc', price: '800,000원' },
      { name: 'AteloQ 30% 1cc', price: '80,000원' },
      { name: '리포라제 5v', price: '20,000원' },
      { name: '노보시스 0.5g', price: '1,500,000원' },
    ],
  },
  {
    title: '드레싱 및 소모품',
    items: [
      { name: '코반(Coban)', price: '4,200원' },
      { name: 'Penko Haft 4x4', price: '6,500원' },
      { name: 'Penko Haft 6x4', price: '8,500원' },
      { name: 'Penko Elastic Bandage', price: '15,000원' },
      { name: 'Penko Fix Roll 5x10', price: '7,500원' },
      { name: 'Penko Fix Roll 10x10', price: '16,600원' },
      { name: 'Penko Fix Roll 15x10', price: '16,800원' },
      { name: 'PENKO ST BAND 소형 8cmx35cm', price: '31,500원' },
      { name: 'PENKO ST BAND 대형 13cmx60cm', price: '40,150원' },
      { name: 'PENKO HAFT HEAT', price: '88,000원' },
      { name: 'Penko STN-Cube 4', price: '16,600원' },
      { name: 'Penko STN-Cube 6', price: '14,700원' },
      { name: 'Penko STN-Cube 8', price: '15,750원' },
      { name: 'PENKO DUAL SUPPORT BAND', price: '8,000원' },
      { name: 'Penko Support Cover 일반형 L', price: '31,500원' },
      { name: 'Penko Support Connecting Tube', price: '10,000원' },
      { name: 'PENKO SONO GEL', price: '9,000원' },
      { name: 'Penko DF Dressing Kit', price: '1,900원' },
      { name: 'S000 Lab Fix3', price: '35,000원' },
      { name: 'FoIyset Dressing Kit', price: '30,000원' },
      { name: '엠픽스실리콘반창고(MASK)', price: '5,500원' },
      { name: 'CHESTBAND(복대)', price: '40,000원' },
      { name: '토닉배드', price: '20,000원' },
    ],
  },
  {
    title: 'MRI 비급여 촬영 항목',
    items: [
      { name: 'Brain MRI+MRA', price: '450,000원' },
      { name: 'Cervical MRA', price: '380,000원' },
      { name: 'MRI Brain diffusion', price: '380,000원' },
      { name: 'MRI Brain', price: '380,000원' },
      { name: 'MRI Chest', price: '380,000원' },
      { name: 'MRI Abdomen', price: '380,000원' },
      { name: 'MRI T-Spine', price: '380,000원' },
      { name: 'MRI L-Spine', price: '380,000원' },
      { name: 'MRI Lt Shoulder', price: '380,000원' },
      { name: 'MRI Rt Shoulder', price: '380,000원' },
      { name: 'MRI Lt Elbow Joint', price: '380,000원' },
      { name: 'MRI Rt Elbow Joint', price: '380,000원' },
      { name: 'MRI Lt Wrist', price: '380,000원' },
      { name: 'MRI Rt Wrist', price: '380,000원' },
      { name: 'MRI Both Hip', price: '380,000원' },
      { name: 'MRI Lt Knee', price: '380,000원' },
      { name: 'MRI Rt Knee', price: '380,000원' },
      { name: 'MRI Lt Ankle', price: '380,000원' },
      { name: 'MRI Rt Ankle', price: '380,000원' },
      { name: 'MRI Lt Forearm', price: '380,000원' },
      { name: 'MRI Rt Forearm', price: '380,000원' },
      { name: 'MRI Lt Humerus', price: '380,000원' },
      { name: 'MRI Rt Humerus', price: '380,000원' },
      { name: 'MRI Lt Femur', price: '380,000원' },
      { name: 'MRI Rt Femur', price: '380,000원' },
      { name: 'MRI Lt Low Leg', price: '380,000원' },
      { name: 'MRI Rt Low Leg', price: '380,000원' },
      { name: 'MRI Lt Tibia', price: '380,000원' },
      { name: 'MRI Rt Tibia', price: '380,000원' },
      { name: 'MRI C-Spine', price: '380,000원' },
      { name: 'MRI Soft Tissue', price: '380,000원' },
      { name: 'MRI Pelvis', price: '380,000원' },
      { name: 'MRI T-L Spine', price: '380,000원' },
      { name: 'MRI Breast', price: '380,000원' },
      { name: 'MRI Lt Hand', price: '380,000원' },
      { name: 'MRI Rt Hand', price: '380,000원' },
      { name: 'MRI Lt Foot', price: '380,000원' },
      { name: 'MRI Rt Foot', price: '380,000원' },
    ],
  },
  {
    title: 'MRI 추가 비용 안내',
    items: [
      { name: '수술 후 촬영(POST MRI)', price: '150,000원' },
      { name: 'MRI 조영제', price: '50,000원' },
      { name: 'MRI 안정제', price: '50,000원' },
    ],
  },
];

const certificateRows = [
  { item: '초진차트', fee: '1,000원', note: '-' },
  { item: '진료기록부', fee: '1,000원/장', note: '1~5장' },
  { item: '진료기록부', fee: '100원/장', note: '6장 이상' },
  { item: '통원 확인서', fee: '3,000원', note: '-' },
  { item: 'CD 복사', fee: '10,000원', note: 'X-ray, CT, MRI 영상자료' },
  { item: 'MRI 판독료', fee: '40,000원', note: '-' },
  { item: '입퇴원 확인서', fee: '3,000원', note: '원본 추가 1,000원' },
  { item: '진료 확인서', fee: '3,000원', note: '원본 추가 1,000원' },
  { item: '수술 확인서', fee: '3,000원', note: '원본 추가 1,000원' },
  { item: '소견서', fee: '20,000원', note: '원본 추가 1,000원' },
  { item: '진단서', fee: '20,000원', note: '원본 추가 1,000원' },
  { item: '산재 서류', fee: '50,000원', note: '-' },
  { item: '상해 진단서', fee: '100,000원', note: '3주 미만' },
  { item: '상해 진단서', fee: '150,000원', note: '3주 이상' },
  { item: '향후 진료비 추정서', fee: '50,000원', note: '1천만원 미만' },
  { item: '향후 진료비 추정서', fee: '100,000원', note: '1천만원 이상' },
  { item: '장애 진단서', fee: '15,000원', note: '-' },
  { item: '후유장애 진단서', fee: '100,000원', note: '보험회사 제출용' },
  { item: '사망 진단서', fee: '10,000원', note: '-' },
  { item: '사체 검안서', fee: '30,000원', note: 'AMA·맥브라이드 방식' },
];

function GuideTabButton({
  active,
  label,
  description,
  onClick,
}: {
  active: boolean;
  label: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-2xl border px-4 py-3 text-left transition-all ${
        active
          ? 'border-[#103559] bg-[#103559] text-white shadow-[0_16px_36px_rgba(16,53,89,0.20)]'
          : 'border-slate-200 bg-white text-slate-700 hover:border-[#7aa7d6] hover:bg-[#f7fbff]'
      }`}
    >
      <p className="text-sm font-black">{label}</p>
      <p className={`mt-1 text-xs ${active ? 'text-slate-200' : 'text-slate-500'}`}>
        {description}
      </p>
    </button>
  );
}

function PriceSection({
  title,
  description,
  items,
}: {
  title: string;
  description?: string;
  items: Array<{ name: string; price: string }>;
}) {
  return (
    <section className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_14px_40px_rgba(8,26,47,0.06)]">
      <div className="border-b border-slate-200 bg-[#f7fbff] px-5 py-4">
        <p className="text-[11px] font-black tracking-[0.18em] text-[#4d81b7]">TEXT GUIDE</p>
        <h3 className="mt-2 text-lg font-black text-[#111827]">{title}</h3>
        {description ? (
          <p className="mt-2 text-sm leading-relaxed text-slate-500">{description}</p>
        ) : null}
      </div>
      <div className="divide-y divide-slate-100">
        {items.map((item, index) => (
          <div
            key={`${title}-${index}`}
            className="grid grid-cols-[1.35fr_0.8fr] gap-4 px-5 py-4 text-sm text-slate-700"
          >
            <div className="leading-7 text-[#111827]">{item.name}</div>
            <div className="text-right font-black text-[#103559]">{item.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function PatientGuideModal({ open, onClose }: PatientGuideModalProps) {
  const [activeTab, setActiveTab] = useState<GuideTabId>('nonBenefit');

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    const handleWindowScroll = () => onClose();

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleWindowScroll, { passive: true });

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
          className="fixed inset-0 z-[95] flex items-center justify-center bg-[#081a2f]/82 px-4 py-6 backdrop-blur-sm"
        >
          <motion.section
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="relative flex w-full max-w-6xl flex-col overflow-hidden rounded-[32px] bg-white shadow-[0_36px_90px_rgba(8,26,47,0.34)]"
            style={{ maxHeight: '88vh' }}
          >
            <div className="absolute -top-20 right-12 h-48 w-48 rounded-full bg-[#7aa7d6]/12 blur-3xl" />
            <div className="absolute -bottom-24 left-8 h-56 w-56 rounded-full bg-[#d7e7f7] blur-3xl" />

            <div className="relative border-b border-slate-200 px-6 py-5 md:px-8">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#7aa7d6]/25 bg-[#f4f8fc] px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-[#103559]">
                    이용안내
                  </div>
                  <h2 className="mt-3 text-2xl font-black text-[#111827] md:text-3xl">
                    이용안내
                  </h2>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-500">
                    이미지처럼 나열하지 않고, 병원 안내문처럼 항목을 한 줄씩 읽을 수 있게 다시 정리했습니다.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-slate-300 hover:text-slate-900"
                  aria-label="이용안내 닫기"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {guideTabs.map((tab) => (
                  <GuideTabButton
                    key={tab.id}
                    active={activeTab === tab.id}
                    label={tab.label}
                    description={tab.description}
                    onClick={() => setActiveTab(tab.id)}
                  />
                ))}
              </div>
            </div>

            <div className="relative overflow-y-auto px-6 py-6 md:px-8">
              {activeTab === 'nonBenefit' ? (
                <div className="space-y-6">
                  <section
                    className="overflow-hidden rounded-[30px] p-6 text-white"
                    style={{
                      background:
                        'linear-gradient(145deg, #081a2f 0%, #103559 55%, #1a4d7b 100%)',
                    }}
                  >
                    <div className="max-w-3xl">
                      <div className="inline-flex rounded-full border border-white/15 bg-white/8 px-3 py-1 text-[11px] font-black tracking-[0.18em]">
                        NON-BENEFIT GUIDE
                      </div>
                      <h3 className="mt-4 text-2xl font-black md:text-3xl">비급여 안내</h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-200">
                        비급여 안내판의 품목명과 금액을 기준으로 보조기, 검사, 치료재료, MRI 항목을
                        한 줄씩 확인할 수 있게 정리했습니다.
                      </p>
                    </div>
                  </section>

                  {nonBenefitSections.map((section) => (
                    <PriceSection
                      key={section.title}
                      title={section.title}
                      items={section.items}
                    />
                  ))}

                  <section className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_14px_40px_rgba(8,26,47,0.06)]">
                    <div className="border-b border-slate-200 bg-[#f7fbff] px-5 py-4">
                      <p className="text-[11px] font-black tracking-[0.18em] text-[#4d81b7]">TEXT GUIDE</p>
                      <h3 className="mt-2 text-lg font-black text-[#111827]">안내 및 문의</h3>
                    </div>
                    <div className="divide-y divide-slate-100">
                      <div className="px-5 py-4 text-sm leading-7 text-slate-700">
                        비급여 세부 금액과 적용 기준은 접수창 또는 원무과에서 다시 확인해 주세요.
                      </div>
                      <div className="px-5 py-4 text-sm leading-7 text-slate-700">
                        문의 전화: 061-277-1100
                      </div>
                    </div>
                  </section>
                </div>
              ) : (
                <div className="space-y-6">
                  <section
                    className="overflow-hidden rounded-[30px] p-6 text-white"
                    style={{
                      background:
                        'linear-gradient(145deg, #103559 0%, #1b5a8d 55%, #7aa7d6 120%)',
                    }}
                  >
                    <div className="max-w-3xl">
                      <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-black tracking-[0.18em]">
                        CERTIFICATE GUIDE
                      </div>
                      <h3 className="mt-4 text-2xl font-black md:text-3xl">제증명 수수료</h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-100">
                        항목, 금액, 기준을 한 줄씩 확인할 수 있도록 접수창 안내문처럼 정리했습니다.
                      </p>
                    </div>
                  </section>

                  <section className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_14px_40px_rgba(8,26,47,0.06)]">
                    <div className="border-b border-slate-200 bg-[#f7fbff] px-5 py-4">
                      <div className="flex items-center gap-3">
                        <FileText size={18} className="text-[#103559]" />
                        <h3 className="text-lg font-black text-[#103559]">발급 수수료 안내</h3>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-slate-500">
                        원본 추가 비용, 영상자료 복사, 보험 제출용 진단서 기준까지 함께 표시합니다.
                      </p>
                    </div>

                    <div className="grid grid-cols-[1.35fr_0.8fr_0.85fr] gap-3 border-b border-slate-200 bg-[#103559] px-5 py-3 text-sm font-black text-white">
                      <span>항목</span>
                      <span>금액</span>
                      <span>비고</span>
                    </div>

                    <div className="divide-y divide-slate-100">
                      {certificateRows.map((row, index) => (
                        <div
                          key={`${row.item}-${index}`}
                          className="grid grid-cols-[1.35fr_0.8fr_0.85fr] gap-3 px-5 py-4 text-sm text-slate-700"
                        >
                          <span className="font-semibold text-[#111827]">{row.item}</span>
                          <span className="font-black text-[#103559]">{row.fee}</span>
                          <span className="text-slate-500">{row.note}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_14px_40px_rgba(8,26,47,0.06)]">
                    <div className="border-b border-slate-200 bg-[#f7fbff] px-5 py-4">
                      <p className="text-[11px] font-black tracking-[0.18em] text-[#4d81b7]">TEXT GUIDE</p>
                      <h3 className="mt-2 text-lg font-black text-[#111827]">발급 안내</h3>
                    </div>
                    <div className="divide-y divide-slate-100">
                      <div className="px-5 py-4 text-sm leading-7 text-slate-700">
                        서류별 발급 가능 여부와 발급 시간은 원무과에서 최종 확인해 주세요.
                      </div>
                      <div className="px-5 py-4 text-sm leading-7 text-slate-700">
                        문의 전화: 061-277-1100
                      </div>
                    </div>
                  </section>
                </div>
              )}
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
