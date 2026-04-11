import { Instagram, Youtube, NotebookPen } from 'lucide-react';

const socialLinks = [
    {
        name: '네이버 블로그',
        href: 'https://blog.naver.com/mokpo_knee',
        icon: NotebookPen,
        bg: '#03C75A',
        color: '#ffffff',
    },
    {
        name: '인스타그램',
        href: 'https://www.instagram.com/mokpo_knee',
        icon: Instagram,
        bg: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
        color: '#ffffff',
    },
    {
        name: '유튜브',
        href: 'https://www.youtube.com/@%EB%B0%95%EC%B2%A0%ED%99%8D-h6b',
        icon: Youtube,
        bg: '#FF0000',
        color: '#ffffff',
    },
];

const SocialSidebar = () => {
    return (
        <div className="fixed left-4 top-28 z-40 flex flex-col gap-2.5">
            {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                    <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${item.name} 바로가기`}
                        className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
                        style={{
                            background: item.bg,
                            color: item.color,
                        }}
                    >
                        <Icon size={22} />
                    </a>
                );
            })}
        </div>
    );
};

export default SocialSidebar;
